# Development:

```
curl https://install.meteor.com/ | sh
git clone https://github.com/wulfmeister/ucsd-hci-team-project
cd ucsd-hci-team-project
meteor --settings settings.localhost.json
```
go to http://localhost:3000/ in your browser

# Deployment:

The `master` branch corresponds to what is (or should be) up at http://mysterymeet-grading.herokuapp.com/

Git flow:
Make a new branch from from `dev` to work on something
When done, merge that branch into `dev` and deploy to `mysterymeet-dev`
When ready for grading, merge `dev` branch into `master` and deploy to `mysterymeet-grading`

localhost:
URL: http://localhost:3000/
settings: settings.localhost.json

for development (deploy whenever for testing):
URL: http://mysterymeet-dev.herokuapp.com/
settings: settings.mysterymeet-dev.json
to deploy:
```
git push heroku dev:master
heroku config:set METEOR_SETTINGS="$(cat settings.mysterymeet-dev.json)
```

for grading (only deploy right before assignments are due):
URL: http://mysterymeet-grading.herokuapp.com/
settings: settings.mysterymeet-grading.json
to deploy:
```
git push heroku grading:master
heroku config:set METEOR_SETTINGS="$(cat settings.mysterymeet-grading.json)
```

for a/b testing (deploy whenever we're doing a/b sets):
URL: http://mysterymeet-ab.herokuapp.com/
settings: settings.mysterymeet-ab.json
to deploy:
```
git push heroku ab:master
heroku config:set METEOR_SETTINGS="$(cat settings.mysterymeet-ab.json)
```