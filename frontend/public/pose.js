// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
window.URL = "https://teachablemachine.withgoogle.com/models/_aMgfsAB/";
let model, webcam, ctx, labelContainer, maxPredictions;
var i = 0;

window.getModelsPredictions = async function getModelsPredictions(canvas) {
    var URL1 = "https://teachablemachine.withgoogle.com/models/_aMgfsAB/";
    var URL2 = "https://teachablemachine.withgoogle.com/models/SrWBV53a/";

    const modelURL1 = URL1 + "model.json";
    const metadataURL1 = URL1 + "metadata.json";
    const modelURL2 = URL2 + "model.json";
    const metadataURL2 = URL2 + "metadata.json";

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    var model1 = await tmPose.load(modelURL1, metadataURL1);
    var model2 = await tmPose.load(modelURL2, metadataURL2);

    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    var { pose, posenetOutput } = await model1.estimatePose(
        canvas
    );
    // Prediction 2: run input through teachable machine classification model
    //console.log(posenetOutput);
    const prediction1 = await model1.predict(posenetOutput);

    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    var { pose, posenetOutput } = await model2.estimatePose(
        canvas
    );
    // Prediction 2: run input through teachable machine classification model
    //console.log(posenetOutput);
    const prediction2 = await model2.predict(posenetOutput);
    return {
        prediction0: prediction1[0].probability.toFixed(2),
        prediction1: prediction1[1].probability.toFixed(2),
        prediction2: prediction1[2].probability.toFixed(2),
        prediction3: prediction2[0].probability.toFixed(2),
        prediction4: prediction2[1].probability.toFixed(2),
        prediction5: prediction2[2].probability.toFixed(2)
    };
};

window.init = async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    window.webcam = new tmPose.Webcam(500, 500, flip); // width, height, flip
    await window.webcam.setup(); // request access to the webcam
    window.webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
};

async function loop(timestamp) {
    window.webcam.update(); // update the webcam frame
    await predict();
    window.webcam.canvas.toDataURL();
    i++;
    window.requestAnimationFrame(loop);
}

async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(
        window.webcam.canvas
    );
    window.posenetOutput = posenetOutput;
    // Prediction 2: run input through teachable machine classification model
    //console.log(posenetOutput);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }

    window.posenetOutputObject = {
        posenetOutput: posenetOutput,
        prob0: prediction[0].probability.toFixed(2),
        prob1: prediction[1].probability.toFixed(2),
        prob2: prediction[2].probability.toFixed(2)
    };

    // finally draw the poses
    drawPose(pose);
}

function drawPose(pose) {
    window.ctx = ctx;
    ctx.drawImage(window.webcam.canvas, 0, 0);
    // draw the keypoints and skeleton
    if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
}