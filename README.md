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

local:
hosted at: http://mysterymeet-grading.meteor.com/
settings: settings.local.json

for grading (only deploy right before assignments are due):
hosted at: http://mysterymeet-grading.meteor.com/
settings:

for development (deploy whenever for testing):
hosted at: http://mysterymeet-dev.meteor.com/
settings: settings.mysterymeet-dev.json

for a/b:
hosted at: http://mysterymeet-ab.meteor.com/
settings: settings.mysterymeet-ab.json