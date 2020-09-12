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

          sh "docker-compose -e COMMIT_ID=${gitInfo.GIT_COMMIT} -e VERSION=${VERSION} up -d"
        }
      }
    }
  }
}
