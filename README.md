#Examn Commands

- La carpeta ya tiene el nginx.conf.
- Igualmente ya cuenta con su Dockerfile.

ALZAR IMAGEN<br>
docker build -t img-examen . <br>
docker run -dit -p 8082:80 --name c-examen --rm img-examen. <br>

--Una vez creado el repo en docker hub.<br>
posible nombre de repo: webdevExam.<br>

docker login <br>
docker image tag img-examen stefydz/webdevExam:v1<br>
docker images <br>
docker push stefydz/webdevExam:v1<br>

