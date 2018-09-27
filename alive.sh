pnum=`sudo lsof -i:80|wc -l`
echo $pnum
if [ $pnum -ge 2 ];then
  echo 'rest api is alive !'
fi
