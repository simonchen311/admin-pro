pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // 拉取代码
                echo '当前git版本'
                sh 'git -v'
                echo '清空本地目录'
                sh "rm -rf *"
                echo '开始拉取git代码'
                // 需要安装 ssh agent 插件
                sshagent(credentials: ['3828ea59-c322-4700-8626-7cb0e9298f64']) {
                    sh 'git clone git@github.com:simonchen311/admin-pro.git'
                }
            }
        }
        stage('Install') {
            steps {
                echo '开始安装依赖'
                sh """
                    cd admin-pro
                    node -v
                    npm config set registry https://registry.npmmirror.com/
                    npm i -g pnpm@8.15.5
                    pnpm -v
                    pnpm install
                """
            }
        }
        stage('Build') {
            steps {
                echo "开始构建和压缩"
                sh """
                    cd admin-pro
                    pnpm build
                    tar -czvf archive.tar.gz ./dist/
                """
            }
        }
        stage('Deploy') {
            steps {
                echo '部署中...'
                script {
                    // 声明服务器信息
                    def remote = [:]
                    remote.name = 'web-server'
                    remote.allowAnyHosts = true
                    remote.host = '120.27.236.15'
                    remote.port = 22
                    remote.user = 'root'

                    // 把「CODING 凭据管理」中的「凭据 ID」填入 credentialsId，而 id_rsa 无需修改
                    withCredentials([sshUserPrivateKey(credentialsId: "403522f0-9da6-4b9e-b867-667908167694", keyFileVariable: 'id_rsa')]) {
                        remote.identityFile = id_rsa

                        // SSH 上传文件到远端服务器
                        sshPut remote: remote, from: './admin-pro/archive.tar.gz', into: '/usr/projects/admin-webhook/'
                        sshCommand remote: remote, command: "sh /usr/projects/admin-webhook/ssh-admin-pro.sh"
                    }
                }
                echo '部署完成'
            }
        }
    }

    // post {
    //     always {
    //         // 这里可以添加构建后的操作，比如清理、发送通知等
    //         echo '项目已经构建完成.'
    //     }
    // }
        //
}
