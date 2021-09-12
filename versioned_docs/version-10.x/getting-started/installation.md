---
title: Установка 
---

* [Установка Apiato](#App)
	* [Установка Проекта](#Project-Setup)
	* [Установка Базы данных](#Setup-Database)
	* [Установка OAuth](#Prepare-OAuth)
	* [Установка документации](#Documentation)
	* [Тестирование Установки](#Testing)
* [Настройка окружения](#Development-Environment)
	* [Использование Docker и Laradock](#Using-Docker-With-Laradock)
	* [Использование Vagrant и Homestead](#Using-Vagrant-Using-Homestead)
	* [Использование MAMP/WAMP или чего-нибудь другого](#Using-anything-else)
* [Play](#Play)


## Установка приложения Apiato  {#App}

### Настройка проекта через Composer {#Project-Setup}

Если у вас уже есть `php` и `composer` на компьютере ([read requirements](../)) вы можете создать новый Apiato проект с помощью следующей команды:

```shell
composer create-project apiato/apiato my-api
```

#### Установщик Apiato {#apiato-installer}

Или, вы можете установить Apiato Installer как глобальную Composer зависимость:  

```shell
composer global require apiato/installer
```

Потом создать новый Apiato проект с помощью Apiato Installer:
```shell
apiato new my-api
```

Преимущества использования установщика Apiato:
* После установки вашего проекта вам будет предложено выбрать контейнеры, которые вы хотите установить в новом проекте.
* Вы можете установить последнюю стабильную версию (по умолчанию) или последнюю разрабатываемую версию Apiato, используя `--dev` флаг.
* Вы можете создать новый репозиторий git для своего проекта, используя `--git` флаг.

:::caution
Обязательно поместите общесистемный каталог bin поставщика Composer в свою `$PATH` переменную таким образом apiato исполняемый файл может быть найден вашей системой. Этот каталог существует в разных местах в зависимости от вашей операционной системы; однако некоторые общие местоположения включают:

macOS: `$HOME/.composer/vendor/bin`
Windows: `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`
GNU / Linux Distributions: `$HOME/.config/composer/vendor/bin` or `$HOME/.composer/vendor/bin`
:::

Для удобства установщик Apiato также может создать репозиторий Git для вашего нового проекта. Чтобы указать, что вы хотите создать репозиторий Git, передайте флаг `--git` при создании нового проекта:

```shell
apiato new my-api --git
```

Эта команда инициализирует новый репозиторий Git для вашего проекта и автоматически зафиксирует базовый скелет Apiato. `git` flag предполагает, что вы правильно установили и настроили Git ([read requirements](./)). Вы также можете использовать флаг --branch, чтобы установить начальное имя ветки.:

```shell
apiato new my-api --git --branch="main"
```

### Настройка базы данных {#Setup-Database}

1) Миграции:

Запустите artisan команду миграции:

```shell
php artisan migrate
```

2) Заполните базу данных:

```shell
php artisan db:seed
```

3) По желанию. По умолчанию Apiato создает "суперпользователя", учитывая роль администратора по умолчанию (для этой роли не установлены разрешения)..

Чтобы предоставить роли `admin` доступ ко всем начальным разрешениям в системе, выполните следующую команду в любое время.

```
php artisan apiato:permissions:toRole admin
```

### OAuth 2.0 Setup {#Prepare-OAuth}

1) Создайте ключи шифрования для создания токенов безопасного доступа и создайте "personal access" и "password grant" клиенты, которые будут использоваться для генерации токенов доступа:

```shell
php artisan passport:install
```

### Настройка документации {#Documentation}

1) Установите [ApiDocJs](http://apidocjs.com/) с помощью NPM или вашего любимого менеджера зависимостей:

```shell
npm install
```

2) Выполните `php artisan apiato:apidoc`

##### Посетите [API Docs Generator](../additional-features/apiato-containers/documentation) чтобы узнать подробнее.

### Настройка тестирования {#Testing}

1) Откройте `phpunit.xml` и убедитесь, что окружение подходит для вашего домена.

2) запустите тесты

```shell
vendor/bin/phpunit
```

## Настройка среды разработки {#Development-Environment}

Вы можете запустить Apiato в своей любимой среде. Ниже вы увидите, как запустить его поверх
[Vagrant](https://www.vagrantup.com/) (using [Laravel Homestead](https://laravel.com/docs/homestead)) или
[Docker](https://www.docker.com/) (используя [Laradock](https://github.com/Laradock/laradock)).

Мы увидим, как использовать оба инструмента, и вы можете выбрать один или другие варианты, например
[Laravel Valet](https://laravel.com/docs/valet), [Laragon](https://laragon.org/) или даже запустить его прямо на вашем компьютере.

> **Heads up!** <br/>
> The ICANN has now officially approved `.dev` as a generic top level domain (gTLD). Therefore, it is **not** recommended
> to use `.dev` domains anymore in your local development setup! We use `.test`, however, you may change it to `.example`, or `.localhost` or whatever suits your needs. [Read more](http://www.faqs.org/rfcs/rfc2606.html).

### Использование Docker (с Laradock) {#Using-Docker-With-Laradock}

Laradock - это среда разработки Docker для PHP. Она облегчает запуск приложений PHP на Docker.
Установка [Laradock](https://github.com/LaraDock/laradock#installation).

Перейдите в каталог `laradock`:

```shell
cd laradock
```
Этот каталог содержит файл docker-compose.yml. (Из проекта LaraDock).

Если вы этого еще не сделали, переименуйте env-example в .env.

```shell
cp env-example .env
```

Запустите контейнеры Docker:

```shell
docker-compose up -d nginx mysql redis beanstalkd
```

Убедитесь, что вы устанавливаете `Docker IP` как `Host` для `DB` и `Redis` в файле `.env`.

Добавьте домен в файл Hosts: `/etc/hosts`. Мы будем использовать apiato.test в качестве локального домена (вы можете изменить его, если хотите).

Сопоставьте домен и его поддомены с 127.0.0.1:

```text
127.0.0.1  apiato.test
127.0.0.1  api.apiato.test
127.0.0.1  admin.apiato.test
```

Если вы используете NGINX или Apache, убедитесь, что server_name (в случае NGINX) или ServerName (в случае Apache) в файле конфигурации вашего сервера установлены следующие `apiato.test api.apiato.test admin.apiato.test`.
*(Также не забудьте указать **Root** или **DocumentRoot** в публичном каталоге внутри apiato `apiato/public`)*.

### Использование Vagrant (с Laravel Homestead) {#Using-Vagrant-Using-Homestead}

Laravel Homestead установлен по умолчанию. Если вы удалили Homestead, вы можете установить его, используя  
```shell
composer require laravel/homestead --dev
```  
  
#### Настройка Homestead:

Создайте файл конфигурации Homestead:

```shell
vendor/bin/homestead make
```

Сопоставьте домен `api.apiato.test` с общедоступным каталогом проекта - Пример:

```text
sites:
	- map: api.apiato.test
  	  to: /{full-path-to}/apiato/public
```

Вы также можете сопоставить другие домены, такие как apiato.test и admin.apiato.test, с другими веб-приложениями:

```text
	- map: apiato.test
  	  to: /{full-path-to}/clients/web/user
	- map: admin.apiato.test
  	  to: /{full-path-to}/clients/web/admin
```

Примечание: в приведенном выше примере «{full-path-to} clientweb» - это отдельные приложения, которые живут в своих собственных репозиториях и в другой папке, чем Apiato. Если ваши администраторы, пользователи или другие типы приложений находятся в Apiato, вы должны указать их всех в папку проекта Apiato `{full-path-to} apiatopublic`. В этом случае у вас будет что-то вроде этого:

```text
    - map: api.apiato.test
      to: /{full-path-to}/apiato/public
    - map: apiato.test
      to: /{full-path-to}/apiato/public
    - map: admin.apiato.test
      to: /{full-path-to}/apiato/public
```

#### Настройка Hosts:

Откройте файл hosts на вашем локальном компьютере `/etc/hosts`.

Мы будем использовать apiato.test в качестве локального домена (вы можете изменить его, если хотите).

Сопоставьте домен и его поддомены с Vagrant IP Address:

```text
192.168.10.10   apiato.test
192.168.10.10   api.apiato.test
192.168.10.10   admin.apiato.test
```

Если вы используете NGINX или Apache, убедитесь, что **server_name** (в случае NGINX) или **ServerName** (в случае Apache)
в файле конфигурации вашего сервера установлены следующие `apiato.test api.apiato.test admin.apiato.test`.
*(Также не забудьте установить свой **root** или **DocumentRoot** в публичный каталог внутри apiato `apiato/public`)*.

Запустите виртуальную машину:

```shell
homestead up --provision
```

*Если вы видите `No input file specified` на поддоменах!
попробуйте запустить эту команду `homestead halt && homestead up --provision`.*

### Используя что-нибудь еще {#Using-anything-else}

Если вы не используете решения виртуализации, вы можете настроить среду прямо на своем компьютере. Проверьте
[software's requirements list](/).

## Давайте запустим {#Play}

Теперь давайте посмотрим это в действии

Откройте свой браузер и наберите:

- `http://apiato.test` Вы должны увидеть HTML-страницу с `Apiato` в центре.
- `http://api.apiato.test` Вы должны увидеть такой ответ:
```json
[
"Welcome to Apiato"
]
```

Откройте свой HTTP-клиент и вызовите:

- `http://api.apiato.test/` Вы должны увидеть ответ JSON с сообщением: `"Welcome to apiato."`,
- `http://api.apiato.test/v1` Вы должны увидеть ответ JSON с сообщением: `"Welcome to apiato (API V1)."`,

Сделайте несколько HTTP-вызовов API:

*Для совершения вызовов вы можете использовать [Postman](https://www.getpostman.com/), [HTTPIE](https://github.com/jkbrzt/httpie) or
любой другой инструмент, который вы предпочитаете.*

Давайте протестируем (регистрацию пользователя) endpoint `http://api.apiato.test/v1/register` с **cURL**:

```shell
curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=John@Doe.me" -F "password=so-secret" -F "name=John Doe" "http://api.apiato.test/v1/register"
```

Вы должны получить такой ответ:

Header:
```text
Access-Control-Allow-Origin → ...
Cache-Control → ...
Connection → keep-alive
Content-Language → en
Content-Type → application/json
Date → Wed, 11 Apr 2000 22:55:88 GMT
Server → nginx
Transfer-Encoding → chunked
Vary → Origin
X-Powered-By → PHP/7.7.7
X-RateLimit-Limit → 30
X-RateLimit-Remaining → 29
```
Body:
```json
{
  "data": {
    "object": "User",
    "id": "7VgmkMw7rR2pWO5j",
    "name": "John Doe",
    "email": "John@Doe.me",
    "email_verified_at": null,
    "gender": null,
    "birth": null,
    "created_at": "2021-04-12T13:33:24.000000Z",
    "updated_at": "2021-04-12T13:33:24.000000Z",
    "readable_created_at": "1 second ago",
    "readable_updated_at": "1 second ago"
  },
  "meta": {
    "include": [
      "roles"
    ],
    "custom": []
  }
}
```
