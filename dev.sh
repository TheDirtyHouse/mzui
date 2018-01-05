read -p "输入1：调试组件，输入2：调试index.html， 请输入：" index
if [ $index = "1" ]
then
	webpack-dev-server --env dev #--host 192.168.33.31
else
	webpack-dev-server --env devIndex
fi
