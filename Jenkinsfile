pipeline {
  agent any

  stages {
    def image

    stage('Build image') {
      steps {
        image = docker.build("todo-list-api-nest:${env.BUILD_ID}")
      }
    }

    stage('Deploy') {
      steps {
        image.run('-p 3000:3000')
      }
    }
  }
}
