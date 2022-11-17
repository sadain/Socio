from flask import Flask, render_templeate

app = Flask(__name__)

@app.route('/')
def socio():
    return render_templeate('./index.html')

if __name__ == "__main__":
    app.run()