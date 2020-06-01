TAG=latest
IMAGE=cms_react_app
REGISTRY=eu.gcr.io/phonic-arcana-190305

if [ -n "$1" ]
then
    TAG=$1
fi

docker build -t $IMAGE .
docker tag $IMAGE:latest $REGISTRY/$IMAGE:$TAG