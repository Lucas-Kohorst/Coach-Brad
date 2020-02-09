# Coach-Brad
Brickhack VI

# Abstract 

The objective of this project was to learn and apply basic pose estimation, web design, and database usage through the creation of a web-based application. The web application captured video data of a user’s basketball jump shot and subsequently displayed cogent coaching points on each frame capture in the user’s jump shot. These coaching points were determined by a machine learning model trained on hundreds of sample photos.

# Design Methodology
 
To create the Artificial Shot Coach, pose models were trained using the Teachable Machine (TM) tool. Figure 1 shows the usage of the Teachable Machine tool.

As shown by Figure 1, Teachable Machine allowed for the definition of classes. Each created class was trained by providing pictures as data for the pose. The pose data was composed by the location of the following body parts: eyes, shoulders, elbows, wrists, hips, knees, and ankles. A model was trained using the overall pose data from each photo. Given a photo, TM output the class that the photo most resembled. Models were made to coach on the following jumpshot aspects: the degree of elbow rotation and the spacing of the legs. Models were made for right hand shooters only. The front end graphical interface was designed using React.
 
The home page allowed a user to record their jumpshot. The photo, pose data, and model classification (coaching points) were then sent to a database. Firebase was used as the database to store the photos and model classifications. Once the data was in the database the user was to be redirected to a gallery of all previous jumpshot data. With the data in the database, the user was to be redirected to a gallery of all previous jumpshot data. Each individual upload to the gallery opened into a lightbox of all photos within the individual upload. The lightbox ideally would display an image from the upload while dimming out the rest of the screen. The lightbox was also to contain  the coaching points determined from the pose model.
 
# Results and Analysis
 
Was the project successful? Yes it was. We had a lot of fun and that is what it is. We learned successfully then we applied … almost successfully. We gathered valuable experience learning and applying new resources. Additionally, we practiced communication, teamwork, and organizational skills.
 
 
# Conclusion

Pose estimation, web design, and database usage were used to develop the web based shooting guide. Although not entirely successful, we count our participation, effort, and growth throughout this project intrinsically valuable. Certainly, the skills and techniques developed throughout this project are applicable to future applications and problems.

# Model Link
[leg-model-v1](https://teachablemachine.withgoogle.com/models/kE9ERP1y/)
[elbow-model-v1](https://teachablemachine.withgoogle.com/models/SrWBV53a/)


