# Execute these commands on your EC2 instance.
# Note that -qO- is not -q0-. O is the English letter, 0 is the number zero.
# 1) Install heroku and git
sudo apt-get install -y git-core
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
which git
which heroku
# 2) Login and set up your SSH keys
heroku login
ssh-keygen -t rsa
heroku keys:add
# 3) Clone a sample repo and push to heroku
git clone https://github.com/heroku/node-js-sample.git
cd node-js-sample
heroku create
git push heroku master





