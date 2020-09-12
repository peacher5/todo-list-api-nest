pipeline {
  agent any

  stages {
    stage('Build & Deploy') {
      steps {
        script {
          COMMIT_ID = sh (script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)
          VERSION = "dev"

          if (env.TAG_NAME) {
            VERSION = env.TAG_NAME
          }

          sh "echo COMMIT_ID=${COMMIT_ID} >> .env"
          sh "echo VERSION=${VERSION} >> .env"

          sh "docker-compose --env-file .env up -d --build"
        }
      }
    }
  }
}
