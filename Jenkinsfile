def image

pipeline {
  agent any

  stages {
    stage('Build image') {
      steps {
        script {
          image = docker.build("todo-list-api-nest:${env.BUILD_ID}")
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          image.run('-p 3000:3000')
        }
      }
    }
  }
}
