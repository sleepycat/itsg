# itsg

This is a proof of concept cli app, exploring the idea of generating ITSG 33 controls from Kubernetes config.


## Installing dependencies

```
npm install
```

## Usage

```
$ cat sqlinstance.yaml
apiVersion: sql.cnrm.cloud.google.com/v1beta1
kind: SQLInstance
metadata:
  name: sqluser-dep
spec:
  region: northamerica-northeast1
  databaseVersion: MYSQL_5_7
  settings:
    backupConfiguration:
      enabled: true
      binaryLogEnabled: true
      startTime: "18:00"
    ipConfiguration:
      requireSsl: true
    tier: db-n1-standard-1
$ cat sqlinstance.yaml | ./itsg
{
  "CP-9": {
    "name": "Information System Backup",
    "satisfiedBy": [
      {
        "default:SQLInstance:sqluser-dep": "spec.settings.backupConfiguration.enabled: true"
      }
    ]
  },
  "PE-18": {
    "name": "Location Of Information System Components",
    "satisfiedBy": [
      {
        "default:SQLInstance:sqluser-dep": "spec.region: northamerica-northeast1"
      }
    ]
  },
  "SC-8": {
    "name": "Transmission Confidentiality And Integrity",
    "satisfiedBy": [
      {
        "default:SQLInstance:sqluser-dep": "spec.settings.ipConfiguration.requireSsl: true"
      }
    ]
  }
}
```
