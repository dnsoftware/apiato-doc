---
title: Генератор кода
---

- [Введение](#introduction)
- [Доступные команды генератора кода](#available-code-generator-commands)
- [Демо](#demo)
- [Настройка генератора кода](#custom-code-stubs)
- [Сотрудничество](#contributing)

## Введение {#introduction}

Генераторы кода-это хороший способ ускорить разработку, создавая шаблонный код на основе ваших входных данных. Возможно
, вы уже знакомы с генераторами кода Laravel (`php artisan make:controller`). 

Apiato для генератора кода работает точно так же. Кроме того, он может генерировать полный Container с полностью работающими операциями CRUD, включая маршруты, запросы, контроллер, Действия, Репозитории, Модели, Миграции, документацию.... и многое другое)

## Доступные команды генератора кода {#available-code-generator-commands}

Чтобы просмотреть список генераторов кода, введите `php artisan` и найдите `apiato`.

``` text
  php artisan apiato:generate:container        Создайте контейнер для apiato с нуля
  php artisan apiato:generate:action           Создать файл Действия (Action) для Контейнера
  php artisan apiato:generate:configuration    Создать конфигурационный файл для Контейнера
  php artisan apiato:generate:container:api    Создайте Контейнер для apiato с нуля (API Part)
  php artisan apiato:generate:container:web    Создайте Контейнер для apiato с нуля (WEB Part)
  php artisan apiato:generate:controller       Создать Контроллер (Controller) для контейнера
  php artisan apiato:generate:event            Создайте новый класс Событие (Event) и соответствующий ему обработчик
  php artisan apiato:generate:eventhandler     Создайте новый класс Обработчика события
  php artisan apiato:generate:exception        Создайте новый класс Исключения (Exception)
  php artisan apiato:generate:job              Создать новый Job класс
  php artisan apiato:generate:mail             Создать новый Mail класс
  php artisan apiato:generate:migration        Создать "пустой" миграционный файл для Контейнера
  php artisan apiato:generate:model            Создать новый класс Модели (Model)
  php artisan apiato:generate:notification     Создать новый класс Notification 
  php artisan apiato:generate:readme           Создать README файл для Контенера
  php artisan apiato:generate:repository       Создать новый Repository класс
  php artisan apiato:generate:request          Создать новый Request класс
  php artisan apiato:generate:route            Создать новый Route класс
  php artisan apiato:generate:seeder           Создать новый Seeder класс
  php artisan apiato:generate:serviceprovider  Создать ServiceProvider для Контейнера
  php artisan apiato:generate:subaction        Создать новый SubAction класс
  php artisan apiato:generate:task             Создать Task файл для Контейнера
  php artisan apiato:generate:test:functional  Создать Functional Test файл.
  php artisan apiato:generate:test:testcase    Создать TestCase файл.
  php artisan apiato:generate:test:unit        Создать Unit Test файл.
  php artisan apiato:generate:transformer      Создать новый Transformer класс для данной Модели
  php artisan apiato:generate:value            Создать новый Value класс
```

Чтобы получить дополнительную информацию о каждой команде, добавьте `--help` к команде. Пример: `php artisan apiato:generate:route --help`. На странице справки показаны все параметры, которые могут быть непосредственно переданы команде.

Если вы не предоставите соответствующую информацию с помощью параметров командной строки, отобразится мастер, который поможет вам.

Например, вы можете напрямую вызвать `php artisan apiato:generate:controller --file=UserController` чтобы напрямую указать класс
, который будет сгенерирован. Мастер, однако, попросит вас `--section` и `--container` также.

Обратите внимание, что **все** генераторы автоматически наследуют параметры `--section`, `--container` и `--file` (они
также задокументированы на странице справки). Кроме того, генератор также может иметь специфические опции (такие как  `--ui` (user-interface)
для генерации чего-то еще).

## Демо {#demo}

#### Создание маршрута (endpoint) file: {#generating-a-route-endpoint-file}
```text
$ php artisan apiato:generate:route

 Enter the name of the Section [AppSection]:
 >

 Enter the name of the Container:
 > Car

 Enter the name of the Route file [DefaultRoute]:
 > CreateCar

> Generating (CreateCar) in (AppSection:Car) Container.

 Select the UI for the controller [API]:
  [0] API
  [1] WEB
 > 0

 Enter the endpoint version (integer)[1]:
 > 1

 Select the type for this endpoint?[private]:
  [0] private
  [1] public
 > 1

 Enter the name of the controller function that needs to be invoked when calling this endpoint:
 > createNewCar

 Enter the HTTP verb of this endpoint (GET, POST,...):
 > POST

 Enter the endpoint URI (foo/bar/{id}):
 > cars

Route generated successfully.

```

#### Результат {#result}

`CreateCar.v1.public.php` файл будет создан в `App\Containers\AppSection\Car\UI\API\Routes\`

## Настройка генератора кода (aka. Customizing the Generator) {#custom-code-stubs}


Если вам не нравится автоматически сгенерированный код (или вы хотели бы адаптировать его к вашим конкретным потребностям), вы можете сделать это довольно легко.

Существующие генераторы (`Generators`) позволяют считывать "пользовательские заглушки" (`custom stubs`) из `app/Ship/Generators/CustomStubs` папки. Имя файла должно быть таким же, как в `vendor/apiato/core/Generator/Stubs`.

Скажем, если вы хотите изменить `config.stub`, просто скопируйте файл в `app/Ship/Generators/CustomStubs/config.stub` и начните адаптировать его под свои нужды. 

Если вы запустите соответствующую команду (например, в этом случае `php artisan apiato:generate:configuration`) 
это будет прочитан ваш конкретный `config.stub` файл вместо предопределенного!

## Сотрудничество {#contributing}

Если вы хотите добавить свои собственные генераторы, ознакомьтесь с [Contribution Guide](../contribution-guide).
