sudo kill -term `sudo lsof -i:80 |awk '  NR > 1 { print $2 }'`
