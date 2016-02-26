# Development:

```
curl https://install.meteor.com/ | sh
git clone https://github.com/wulfmeister/ucsd-hci-team-project
cd ucsd-hci-team-project
meteor --settings settings.development.json
```
go to http://localhost:3000/ in your browser

# Deployment:

```
meteor deploy mysterymeet --settings settings.production.json
```

The master branch corresponds to what is (or should be) up at http://mysterymeet.meteor.com/.

localhost:
URL: http://localhost:3000/
settings: settings.localhost.json
Facebook API key from: Mitch's account

for grading (only deploy right before assignments are due):
URL: http://mysterymeet-grading.meteor.com/
settings: settings.mysterymeet-grading.json
Facebook API key from: Mitch's account

for development (deploy whenever for testing):
URL: http://mysterymeet-dev.meteor.com/
settings: settings.mysterymeet-dev.json
Facebook API key from: Mitch's account

for a/b testing (deploy whenever we're doing a/b sets):
URL: http://mysterymeet-ab.meteor.com/
settings: settings.mysterymeet-ab.json
Facebook API key from: Mitch's account