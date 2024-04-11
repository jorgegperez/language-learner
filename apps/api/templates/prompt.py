PROMPT_TEMPLATE = """
Create a {level} level sentence in English
related to the following topic "{topic}",
and add a sentence in Spanish that translates the English sentence.

Response should be in JSON format, and follow the structure below:

JSON Fields:
    "english": "English sentence",
    "spanish": "Spanish sentence"
"""
