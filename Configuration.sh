apt-get update
apt-get install git
apt install nodejs npm

git clone https://github.com/NovaFlare-Engine-Concentration/NovaFlare-Online-Server.git
cd NovaFlare-Online-Server

docker build -t OnlineServer .
docker run -p 2567:2567 OnlineServer