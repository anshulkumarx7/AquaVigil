exports.getDescription = async (req, res) => {
  try {
    const { description } = req.body
    if (!description) {
      return res.status(400).json({
        success: false,
        message: "Description is required",
      })
    }

    const prompt = "Given description: " + description + " Please provide a short summary of the description like what to do in this situation."

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      max_tokens: 100,
    })

    const jsonResponse = JSON.parse(response.choices[0].message.content)

    if (jsonResponse.success) {
      return res.status(200).json({
        success: true,
        description: jsonResponse.data,
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}
