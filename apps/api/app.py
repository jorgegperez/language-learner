import os
import json
from flask import Flask, request
from langchain.prompts import PromptTemplate
from langchain.llms import openai
from langchain.chains import LLMChain
from templates.prompt import PROMPT_TEMPLATE

app = Flask(__name__)


@app.route('/', methods=['GET'])
def health():
    """
    Health check endpoint.
    """
    return {'status': 'ok'}


@app.route('/generate', methods=['POST'])
def generate_exercise():
    """
    Generate an exercise based on the topic and level provided in the request.

    Request:
    {
        topic?: string,
        level: string
    }
    """
    topic = request.json['topic']
    level = request.json['level']
    print(f"Generating exercise for topic {topic} and level {level}")
    prompt = PromptTemplate(input_variables=["topic", "level"],
                            template=PROMPT_TEMPLATE)
    chain = LLMChain(prompt=prompt,
                     llm=openai.OpenAI(
                         openai_api_key=os.environ.get('OPENAI_API_KEY')
                         ))
    response = chain.run(topic=topic, level=level)
    output = json.loads(response)
    return output


if __name__ == '__main__':
    app.run(host='0,0,0,0', port=8000)
