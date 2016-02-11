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
curl https://install.meteor.com/ | sh
git clone https://github.com/wulfmeister/ucsd-hci-team-project
cd ucsd-hci-team-project
meteor deploy mysterymeet --settings settings.production.json
```

The master branch corresponds to what is (or should be) up at http://eaat.meteor.com/.
