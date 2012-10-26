import time, flask

DEMO_COUNT = 6

app = flask.Flask('Utah JS Demo')

@app.route("/api/<thing>")
def _api(thing):
    time.sleep(1.0)
    return "Hello, {0}!".format(thing)

@app.route("/")
def _root():
    return flask.render_template("root.html")

@app.route("/demos/<int:demo>")
def _demo(demo):
    return flask.render_template("root.html", demo=demo, count=DEMO_COUNT)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)