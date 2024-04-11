import os
import json
from dotenv import load_dotenv
from flask import Flask, request
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from templates.prompt import PROMPT_TEMPLATE
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


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
    if 'topic' in request.json:
        topic = request.json['topic']
    else:
        topic = 'General English'

    level = request.json['level']
    prompt = PromptTemplate(input_variables=["topic", "level"],
                            template=PROMPT_TEMPLATE)
    chain = LLMChain(prompt=prompt,
                     llm=ChatOpenAI(
                         openai_api_key=os.environ.get('OPENAI_API_KEY'),
                         model='gpt-4',
                         ))
    response = chain.run(topic=topic, level=level)
    output = json.loads(response)
    return output


if __name__ == '__main__':
    load_dotenv()
    app.run(host='0,0,0,0', port=8000)
