import Notes from "../model/notes.model.js";
import User from "../model/user.model.js";
import { generateGeminiResponse } from "../services/gemini.services.js";
import { buildPrompt } from "../utils/promptBuilder.js";

export const generateNotes = async (req, res) => {
    try {
        const {
            topic,
            classLevel,
            examType,
            revisionMode,
            includeDiagram,
            includeChart
        } = req.body;

        if (!topic) {
            return res.status(400).json({
                success: false,
                message: "Topic is required!"
            });
        }

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!"
            });
        }

        if (user.credits < 10) {
            user.isCreditAvailable = false;
            await user.save();

            return res.status(403).json({
                success: false,
                message: "Insufficient credits",
            });
        }

        const prompt = buildPrompt({
            topic,
            classLevel,
            examType,
            revisionMode,
            includeDiagram,
            includeChart
        });

        const AIResponse = await generateGeminiResponse(prompt);

        const notes = await Notes.create({
            user: user._id,
            topic,
            classLevel,
            examType,
            revisionMode,
            includeDiagram,
            includeChart,
            content: AIResponse
        });

        user.credits -= 10;
        if (user.credits <= 10) {
            user.isCreditAvailable = false;
        }

        if (!Array.isArray(user.notes)) {
            user.notes = [];
        }

        user.notes.push(notes._id);

        await user.save();

        return res.status(200).json({
            data: AIResponse,
            noteId: notes._id,
            creditsLeft: user.credits
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "AI generation Failed!",
            message: "Internal Error: " + error.message
        });
    }

} 