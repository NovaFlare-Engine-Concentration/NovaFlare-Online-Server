sudo apt-get update
sudo apt-get install git
sudo apt install nodejs npm

git clone https://github.com/NovaFlare-Engine-Concentration/NovaFlare-Online-Server.git
cd NovaFlare-Online-Server

npm config set package-lock true
npm ci

npm start