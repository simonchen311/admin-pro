pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // 拉取代码
                node -v
                git -v
                // git 'ssh://git@1.2.3.4:8822/react-wheel/react-coms.git'
            }
        }

        // stage('Build') {
        //     steps {
        //         // 安装依赖并构建项目
        //         sh 'npm install'
        //         sh 'npm run build'
        //     }
        // }
    }

    // post {
    //     always {
    //         // 这里可以添加构建后的操作，比如清理、发送通知等
    //         echo '项目已经构建完成.'
    //     }
    // }
        //
}
