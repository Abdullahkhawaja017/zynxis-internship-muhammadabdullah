from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

# Load trained model and TF-IDF vectorizer
model = joblib.load("model.pkl")
tfidf = joblib.load("tfidf.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    message = request.form["message"]

    # Convert text into TF-IDF features
    message_features = tfidf.transform([message])

    # Make prediction
    prediction = model.predict(message_features)[0]

    return render_template(
        "index.html",
        prediction=prediction,
        message=message
    )


if __name__ == "__main__":
    app.run(debug=True)