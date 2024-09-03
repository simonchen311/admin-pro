pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // 拉取代码

                echo '测试git版本'
                sh 'git -v'
                echo '开始安装nvm node 和 pnpm'
                sh """
                    . ~/.nvm/nvm.sh
                    nvm --version
                    NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist nvm install 16.14.2
                    nvm use 16.14.2
                    node -v
                    npm config set registry https://registry.npmmirror.com/
                    npm i -g pnpm@8.15.5
                    pnpm -v
                """


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
