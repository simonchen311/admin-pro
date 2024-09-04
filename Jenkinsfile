pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // 拉取代码

                echo '当前git版本'
                sh 'git -v'
                echo '开始拉取git代码'
                git  credentialsId: '3828ea59-c322-4700-8626-7cb0e9298f64', url: 'git@github.com:simonchen311/admin-pro.git'

                // sh 'git clone"git@github.com:simonchen311/admin-pro.git"'

            }
        }
        // stage('Install') {
        //     steps {
        //         echo '开始安装nvm node 和 pnpm'
        //         sh """
        //             . ~/.nvm/nvm.sh
        //             nvm --version
        //             NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist nvm install 16.14.2
        //             nvm use 16.14.2
        //             node -v
        //             npm config set registry https://registry.npmmirror.com/
        //             npm i -g pnpm@8.15.5
        //             pnpm -v
        //         """
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         // 安装依赖并构建项目
        //         sh 'pnpm install'
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
