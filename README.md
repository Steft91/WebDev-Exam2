#Exam Commands

- La carpeta ya tiene el nginx.conf <br>
- Igualmente ya cuenta con su Dockerfile. <br>

ALZAR IMAGEN<br>
docker build -t img-examen . <br>
EJECUTAR CONTENEDOR <br>
docker run -dit -p 8082:80 --name c-examen --rm img-examen. <br>

--Una vez creado el repo en docker hub.<br>
posible nombre de repo: webdevExam.<br>

INICIAR SESIÓN <br>
docker login <br>
IMAGEN ETIQUETADA EN REPO REMOTO <br>
docker image tag img-examen stefydz/webdevExam:v1<br>
COMPROBACIÓN <br>
docker images <br>
SUBIR IMAGEN AL REPO <br>
docker push stefydz/webdevExam:v1<br>

