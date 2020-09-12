pipeline {
  agent any

  stages {
    stage('Build & Deploy') {
      steps {
        script {
          gitInfo = checkout scm

          VERSION = "dev"

          if (env.TAG_NAME) {
            VERSION = env.TAG_NAME
          }

          sh "echo COMMIT_ID=${gitInfo.GIT_COMMIT} >> .env"
          sh "echo VERSION=${VERSION} >> .env"

          sh "docker-compose --env-file .env up -d"
        }
      }
    }
  }
}
