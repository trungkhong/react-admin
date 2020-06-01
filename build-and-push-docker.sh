TAG=latest

if [ -n "$1" ]
then
    TAG=$1
fi

./build-docker.sh $TAG
./push-docker.sh $TAG