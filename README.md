
### docker setting
```bash
sudo docker images
sudo docker pull oseongryu/centos-jekyll:0.0.1
sudo docker run -it -d --name centos-jekyll -p 8088:8088 oseongryu/centos-jekyll:0.0.1
sudo docker container ls -as

sudo docker start centos-jekyll
sudo docker restart centos-jekyll

netstat -tnlp
sudo docker exec -it centos-jekyll /bin/bash
```

### docker backup
```bash
docker commit centos-jekyll oseongryu/centos-jekyll:0.0.1
docker push oseongryu/centos-jekyll:0.0.1
```