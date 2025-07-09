#Examn Commands

- La carpeta ya tiene el nginx.conf
- Igualmente ya cuenta con su Dockerfile

ALZAR IMAGEN
docker build -t img-examen .
docker run -dit -p 8082:80 --name c-examen --rm img-examen

--Una vez creado el repo en docker hub
posible nombre de repo: webdevExam

docker login 
docker image tag img-examen stefydz/webdevExam:v1
docker images 
(comprobación)
docker push stefydz/webdevExam:v1

