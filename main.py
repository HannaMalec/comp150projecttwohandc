from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

count = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/increment', methods=['POST'])
def increment():
    global count
    count += 1
    return jsonify({'count': count})

@app.route('/flip_case', methods=['POST'])
def flip_case():
    text = request.json['text']
    flipped_text = ''.join(c.lower() if c.isupper() else c.upper() for c in text)
    return jsonify({'flipped_text': flipped_text})

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/order')
def order():
    return render_template('order.html')  # This is where you render the "order.html" page

@app.route('/make_drinks')
def make_drinks():
    return render_template('make_drinks.html')

@app.route('/customer_feedback')
def customer_feedback():
    return render_template('customer_feedback.html')

@app.route('/results')
def results():
    return render_template('results.html')

# Corrected /start route, rendering order.html
@app.route('/start')
def start_game():
    return render_template('order.html')  # This loads the correct order.html page

if __name__ == '__main__':
    app.run(debug=True)
