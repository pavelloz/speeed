import { Translation } from "./type";

export const bg: Translation = {
  messages: {
    processing: "Обработка...",
    deviceIsDisconnected: "Устройството е изключено!",
    connectingInProgress: "Свързването е в ход...",
    settingsHaveBeenSaved: "Вашите настройки са запазени!",
    configLoadedSuccessful: "Конфигурацията е заредена успешно!",
    overrideFileWarning: {
      header: "Предупреждение!",
      message: {
        theFileText: "Файлът",
        areYouSureToOverrideText: "съществува! Сигурни ли сте, че искате да замените този файл?",
      },
      buttons: {
        yes: "Отмяна на",
        no: "Не",
      },
    },
    unsupportedConfigurationFile: {
      header: "Грешка!",
      text: "Неподдържан или повреден конфигурационен файл!",
    },
    pleaseWait: "Моля, изчакайте...",
    connectingToMotor: "Свързване към двигателя...",
    noDeviceFound: "Не е намерено устройство!",
    cantEstablishingConnection: "Не мога да установя връзка с двигателя! Проверете края на връзката и рестартирайте!",
    connectedTo: "Свързан с",
    readBasSuccess: {
      basTypeLevel: "Нива",
      basTypeGeneral: "Обща информация",
      first: "Прочетете",
      second: "параметри успешно!",
    },
    readPedalAssistSuccess: "Прочетете успешно параметрите на Pedal Assist!",
    readThrottleHandleSuccess: "Успешно четене на параметрите на дръжката на газта",
    readAllSuccess: "Успешно прочетете всички параметри!",
    somethingWentWrong: "Нещо се е объркало! Дневник:",
    writeSuccess: {
      levels: "Нива",
      general: "Обща информация",
      pedalAssist: "Помощ при натискане на педала",
      throttleHandle: "Дръжка на дросела",
      first: "Напишете",
      second: "параметри успешно!",
    },
    writeAllSuccess: "Успешно записване на всички параметри!",
  },
  buttons: {
    cancel: "Отмяна на",
  },
  errors: {
    writeBasErrors: {
      "0": "Защита от изтощена батерия извън обхвата, моля, нулирайте!",
      "1": "Ограничението на тока е извън обхвата, моля, нулирайте го!",
      "2": "Ограничението на тока за PAS0 е извън обхвата, моля, нулирайте го!",
      "3": "Ограничението на скоростта за PAS0 е извън обхвата, моля, нулирайте го!",
      "4": "Ограничението на тока за PAS1 е извън обхвата, моля, нулирайте го!",
      "5": "Ограничението на скоростта за PAS1 е извън обхвата, моля, нулирайте го!",
      "6": "Ограничението на тока за PAS2 е извън обхвата, моля, нулирайте го!",
      "7": "Ограничението на скоростта за PAS2 е извън обхвата, моля, нулирайте го!",
      "8": "Ограничението на тока за PAS3 е извън обхвата, моля, нулирайте го!",
      "9": "Ограничението на скоростта за PAS3 е извън обхвата, моля, нулирайте го!",
      "10": "Ограничението на тока за PAS4 е извън обхвата, моля, нулирайте го!",
      "11": "Ограничението на скоростта за PAS4 е извън обхвата, моля, нулирайте го!",
      "12": "Ограничението на тока за PAS5 е извън обхвата, моля, нулирайте го!",
      "13": "Ограничението на скоростта за PAS5 е извън обхвата, моля, нулирайте го!",
      "14": "Ограничението на тока за PAS6 е извън обхвата, моля, нулирайте го!",
      "15": "Ограничението на скоростта за PAS6 е извън обхвата, моля, нулирайте го!",
      "16": "Ограничението на тока за PAS7 е извън обхвата, моля, нулирайте го!",
      "17": "Ограничението на скоростта за PAS7 е извън обхвата, моля, нулирайте го!",
      "18": "Ограничението на тока за PAS8 е извън обхвата, моля, нулирайте го!",
      "19": "Ограничението на скоростта за PAS8 е извън обхвата, моля, нулирайте го!",
      "20": "Ограничението на тока за PAS9 е извън обхвата, моля, нулирайте го!",
      "21": "Ограничението на скоростта за PAS9 е извън обхвата, моля, нулирайте го!",
      "22": "Диаметърът на колелото е извън обхвата, моля, нулирайте го!",
      "23": "Сигналите на скоростомера са извън обхвата, моля, нулирайте ги!",
      default: "Проблем с комуникацията, моля, възстановете настройките!",
    },
    writePasErrors: {
      "0": "Грешка в типа на педалния сензор, моля, нулирайте!",
      "1": "Грешка в определеното ниво на асистенция, моля, нулирайте!",
      "2": "Грешка в ограничението на скоростта, моля, нулирайте!",
      "3": "Start Current out of range, please reset!",
      "4": "Грешка в режим на бавно стартиране, моля, нулирайте!",
      "5": "Старт Степен извън обхвата, моля, нулирайте!",
      "6": "Грешка в работен режим, моля, нулирайте!",
      "7": "Stop Delay извън обхвата, моля, нулирайте!",
      "8": "Текущото разпадане е извън обхвата, моля, нулирайте го!",
      "9": "Спрете Decay извън обхвата, моля, нулирайте!",
      "10": "Дръжте тока извън обхвата, моля, нулирайте!",
      default: "Неизвестна грешка, моля, нулирайте!",
    },
    writeThrErrors: {
      "0": "Началното напрежение е извън обхвата, моля, нулирайте го!",
      "1": "Край Напрежение извън обхвата, моля, нулирайте!",
      "2": "Грешка в режима, моля, нулирайте!",
      "3": "Грешка в Designated Assist, моля, нулирайте!",
      "4": "Грешка в ограничението на скоростта, моля, нулирайте!",
      "5": "Start Current out of range, please reset!",
      default: "Неизвестна грешка, моля, нулирайте!",
    },
  },
  mainRouter: {
    home: "Начало",
    settings: "Настройки",
    help: "Помощ",
  },
  main: {
    label_language: "Език",
    object_Profile: {
      header: "Профил",
      open: "Отворете",
      save_as: "Запазване като",
      save: "Запазете",
      default_configuration_string: "Конфигурация по подразбиране (не е посочен файл)",
      popup_header: "Запазване на конфигурацията като",
      popup_placeholder: "Въведете името на файла тук",
      popup_button_label: "Запазете",
    },
    object_Motor: {
      header: "Мотор",
      read_all: "Прочетете",
      write_all: "Напишете",
      connect: "Свържете",
      disconnect: "Прекъсване на връзката",
      status: {
        disconnected: "изключен",
        connecting: "свързване на",
        connected: "свързан",
        error: "грешка",
      },
      motor_info: {
        status: "Статус",
        manufacturer: "Производител",
        model: "Модел",
        hardware_version: "Версия на хардуера",
        firmware_version: "Версия на фърмуера",
        nominal_voltage: "Номинално напрежение",
        max_current: "Максимален ток",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Обща информация",
      levels: "Нива",
      pedal: "Педал",
      throttle: "Дроселна клапа",
    },
    header: {
      readButtonText: "Прочетете",
      writeButtonText: "Запазете",
    },
    tabs: {
      general: {
        header: "Обща информация",
        lowBatteryProtection: "Защита от изтощена батерия",
        currentLimit: "Ограничение на тока",
        speedMeterType: {
          text: "Тип измервател на скоростта",
          types: ["Външен, измервател на колелата", "Вътрешен, моторен измервателен уред", "По фаза на двигателя"],
        },
        speedMeterSignals: "Сигнали за измерване на скоростта",
        wheelDiameter: {
          text: "Диаметър на колелото",
          types: [
            "16 инча",
            "17 инча",
            "18 инча",
            "19 инча",
            "20 инча",
            "21 инча",
            "22 инча",
            "23 инча",
            "24 инча",
            "25 инча",
            "26 инча",
            "27 инча",
            "700C",
            "28 инча",
            "29 инча",
            "30 инча",
          ],
        },
      },
      levels: {
        header: "Нива на асистенция",
        level: "Ниво",
        current: "Текущ",
        speed: "Скорост",
        popoverCurrentLimitHeader: "Ограничение на тока за ниво",
        popoverSpeedLimitHeader: "Ограничение на скоростта за ниво",
      },
      pedal: {
        header: "Помощ при натискане на педала",
        pedalSensorType: {
          text: "Тип на сензора за педалите",
          types: ["Няма", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Определено ниво на помощ",
          types: ["По заповед на дисплея", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ограничение на скоростта",
          types: [
            "По заповед на дисплея",
            "15 км/ч",
            "16 км/ч",
            "17 км/ч",
            "18 км/ч",
            "19 км/ч",
            "20 км/ч",
            "21 км/ч",
            "22 км/ч",
            "23 км/ч",
            "24 км/ч",
            "25 км/ч",
            "26 км/ч",
            "27 км/ч",
            "28 км/ч",
            "29 км/ч",
            "30 км/ч",
            "31 км/ч",
            "32 км/ч",
            "33 км/ч",
            "34 км/ч",
            "35 км/ч",
            "36 км/ч",
            "37 км/ч",
            "38 км/ч",
            "39 км/ч",
            "40 км/ч",
          ],
        },
        startCurrent: "Начален ток",
        slowStartMode: "Режим на бавно стартиране",
        startDegree: "Начална степен",
        workMode: {
          text: "Работен режим",
          types: ["Неопределено"],
        },
        stopDelay: "Забавяне на спирането",
        currentDecay: "Текущ разпад",
        stopDecay: "Спиране на разпадането",
        keepCurrent: "Поддържане на актуална информация",
      },
      throttle: {
        header: "Асистент за дроселовата клапа",
        startVoltage: "Начално напрежение",
        endVoltage: "Крайно напрежение",
        mode: {
          text: "Режим",
          types: ["Скорост", "Текущ"],
        },
        designatedAssistLevel: {
          text: "Определено ниво на помощ",
          types: ["По заповед на дисплея", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ограничение на скоростта",
          types: [
            "По заповед на дисплея",
            "15 км/ч",
            "16 км/ч",
            "17 км/ч",
            "18 км/ч",
            "19 км/ч",
            "20 км/ч",
            "21 км/ч",
            "22 км/ч",
            "23 км/ч",
            "24 км/ч",
            "25 км/ч",
            "26 км/ч",
            "27 км/ч",
            "28 км/ч",
            "29 км/ч",
            "30 км/ч",
            "31 км/ч",
            "32 км/ч",
            "33 км/ч",
            "34 км/ч",
            "35 км/ч",
            "36 км/ч",
            "37 км/ч",
            "38 км/ч",
            "39 км/ч",
            "40 км/ч",
          ],
        },
        startCurrent: "Начален ток",
      },
    },
  },
  help: {
    about: {
      header: "За",
      p1: "Инструмент за конфигуриране за серията двигатели Bafang BBS.",
      author: "Автор",
    },
    connection: {
      header: "Връзка",
      p1:
        "За да се свържете с контролера на вашия електрически велосипед от серията Bafang BBS, ви е необходим адаптер USB-OTG, адаптер USB към сериен адаптер с женски конектори тип Julet в края.",
      p2:
        'Можете да си купите и "оригинален" USB кабел за програмиране, но той е просто скъп адаптер от USB към сериен кабел с подходящ конектор за кабела на вашия BBS контролер.',
    },
    general: {
      header: "Обща информация",
      lowBatteryProtection:
        "Това е напрежението, при което контролерът ще спре двигателя, за да предпази акумулатора от прекомерен разряд. То трябва да бъде правилно зададено от производителя и не е необходимо да го променяте. За 13S акумулатори 41 V е стойността по подразбиране.",
      currentLimit:
        "Това е максималният ток, който може да протича през двигателя. Ако вашият двигател е например 25 А, можете да го настроите на 20 А, за да го предпазите, ако искате. Не се препоръчва да се задава по-висок ток от номиналния. Дори и да зададете 25A, пиковият ток ще бъде по-висок, така че по-добре не задавайте повече от това.",
      speedMeterType:
        "С този бутон се избира скоростомерът, използван на вашия велосипед. За комплектите BBS той е външен. Този параметър се задава от производителя и ако настройката ви не е персонализирана, не е необходимо да го променяте.",
      speedMeterSignals:
        "Тук можете да зададете колко сигнала на оборот да генерира сензорът. Ако използвате външен сензор с магнит, той генерира един сигнал на оборот на колелото. Този параметър се задава от производителя и ако настройката ви не е персонализирана, не е необходимо да го променяте.",
      wheelDiameter:
        "Диаметърът на колелото трябва да съответства на размера на задвижващото колело (следователно велосипедът ви може да има две колела с различен размер). Задаването на диаметър с по-малък размер, отколкото е в действителност, ще увеличи скоростта ви, но също така може лесно да доведе до повреда на двигателя.",
      endText:
        "Когато приключите с настройката на общите настройки, можете да използвате бутона WRITE в този раздел на програмата, за да ги запишете в контролера. Можете също така да използвате бутона READ (ЧЕТЕНЕ) по всяко време, за да ги прочетете (това ще замени всички стойности в General (Общи). Това няма да презапише никакви други настройки.",
    },
    levels: {
      header: "Нива на асистенция",
      p1:
        "Това са всички възможни настройки за подпомагане (както за подпомагане на педалите, така и за управление на газта с помощта на една от тях).",
      p2:
        "Важно е да се спомене, че токът и ограниченията на скоростта на Асистент 0 трябва да бъдат настроени на 1, ако искате да можете да използвате дръжката на газта при избран на LCD дисплея Асистент за педали 0.",
      p3: "Обикновено Асистент 0 се настройва на 0, за да можете да използвате велосипеда си без помощ, ако желаете.",
      p4:
        "Бъдете внимателни при определянето на тези нива. Ако зададете твърде нисък ток, двигателят няма да може да движи велосипеда и той може да се повреди. Ако зададете твърде висок ток на първото ниво на подпомагане, тогава ускорението при потегляне ще бъде значително. Това може да повреди вътрешните предавки или да доведе до падане на велосипеда.",
      p5:
        "Ограничението на скоростта задава при каква скорост (% от максималната скорост, зададена от вашия LCD дисплей) двигателят ще намали мощността си и просто ще поддържа тази скорост, вместо да ускорява повече.",
      p6:
        "Превключвателите в горната част на приложението ви позволяват да показвате автоматично преобразувани стойности (ток и скорост или проценти).",
      endText:
        "Когато приключите с настройките на нивата на асистенция, можете да използвате бутона WRITE в този раздел на програмата, за да ги запишете в контролера. Можете също така да използвате бутона READ (ЧЕТЕНЕ) по всяко време, за да ги прочетете (това ще замени всички стойности в Assist Levels (Нива на подпомагане). Това няма да презапише никакви други настройки.",
    },
    pedal: {
      header: "Помощ при натискане на педала",
      p1:
        "Системата Pedal Assist ви помага, докато въртите педалите. В този раздел можете да настроите нейната работа. Някои от тях не трябва да променяте, тъй като са специфични за вашия комплект. Те се задават от производителя.",
      pedalSensorType:
        "С този параметър се избира типът на сензора за въртене на педала. Той е зададен от производителя и не трябва да се променя.",
      designatedAssistLevel:
        'С този параметър можете да избирате два типа операции. Първият е "По команда на дисплея". Това означава, че нивото на асистенция (това от раздела "Основни настройки") ще бъде избрано от вашия LCD дисплей. Втората възможност е да изберете конкретно ниво на асистенция, което ще бъде фиксирано и няма да можете да го променяте от LCD дисплея. За тази цел можете да изберете всяко ниво на асистенция от 0 до 9.',
      speedLimit:
        'Това е максималната скорост, при която двигателят ще осигури допълнително ускорение. Когато скоростта е достигната, той само ще я поддържа, но няма да ускорява повече. Ако зададете този параметър на "По команда на дисплея", ще можете да задавате скоростта от вашия LCD дисплей. Имайте предвид, че някои LCD дисплеи ви позволяват да задавате скорост от 99 км/ч, което не е възможно поне с настоящите комплекти BBS. Доколкото съм тествал, максималната скорост без въртене на педалите е 40 км/ч (когато размерът на колелата е зададен правилно). Тази настройка се използва за всички нива на подпомагане, които виждате в раздела Basic (Основни). Ако зададете 40 км/ч (в тази програма или от LCD дисплея) и нивото на асистенция 5 е настроено на 50% скорост, тогава ще можете да достигнете 20 км/ч при това ниво на асистенция.',
      startCurrent:
        "Това е стартовият ток, когато започнете да въртите педалите. Добре е да го настроите на поне 10%, за да сте сигурни, че велосипедът ще започне да се движи и двигателят няма да спре. Задаването на много висока стойност ще накара велосипеда да се ускори много бързо при стартиране, което може да повреди вътрешните му предавки, а също и двигателя. Препоръчителната стойност е между 10 и 30 %. Също така трябва да се уверите, че не започвате да въртите педалите на твърде висока предавка, което ще натовари прекалено много двигателя.",
      slowStartMode:
        "Тази настройка контролира колко бързо се достига началният ток. Можете да накарате велосипеда да ускорява плавно и да реагира бързо. Стойност около 4 обикновено работи добре за нормално колоездене. Ако сте планински колоездач, тогава настройката на ниска стойност ще направи ускорението по-бързо, което може да е полезно, но трябва да внимавате да не изпържите контролера и двигателя.",
      startDegree:
        "Този параметър задава колко импулса от сензора на педала са необходими, за да се стартира двигателят. Пълното завъртане на педала при комплектите BBS генерира 24 импулса. Задаването на стойност 0 или 1 няма да работи. Стойност около 4 работи добре, тъй като не се стартира само при малко движение, а също така не изисква прекалено голямо завъртане.",
      workMode:
        "Предназначението на този параметър не е много ясно. Предполага се, че той контролира мощността в зависимост от скоростта на въртене на педала. Стойността, зададена от производителя, изглежда работи добре, така че не е необходимо да я променяте.",
      stopDelay:
        "Това е забавянето след спиране на педалите, преди двигателят да спре. Стойност от 250 ms работи добре.",
      currentDecay:
        "Този параметър задава колко бързо да спада токът, когато въртите педалите бързо и достигате максималната скорост при избраното ниво на подпомагане. По-ниска стойност означава, че токът ще започне да спада при по-ниска скорост.",
      stopDecay: "Времето, за което двигателят спира.",
      keepCurrent:
        "Тази настройка контролира процента от максималния ток при избраното ниво на подпомагане, който ще преминава през двигателя, когато достигнете максимална скорост и продължите да въртите педалите. Така че, ако максималният ви ток е 25 А и използвате асистент за педали 5, настроен на 50% ток, тогава максималният ток за това ниво на асистенция ще бъде 12,5 А. След това, ако функцията за поддържане на тока е настроена на 50%, когато достигнете максимална скорост и продължите да въртите педалите, токът ще се поддържа на ниво 6,25A. Това осигурява плавен преход към мощността на асистенцията, когато намалите скоростта на педалиране и скоростта на придвижване спадне под максималната.",
      endText:
        "Когато приключите с настройките на Pedal Assist, можете да използвате бутона WRITE в този раздел на програмата, за да ги запишете в контролера. Можете също така да използвате бутона READ по всяко време, за да ги прочетете (това ще замени всички стойности в Pedal Assist. Това няма да презапише никакви други настройки.",
    },
    throttle: {
      header: "Дръжка на дросела",
      p1:
        "Ако вашият комплект е оборудван с дръжка за газта, този раздел ви позволява да конфигурирате работата му. Уверете се, че Assis 0 е настроена на 1 (както за ток, така и за скорост), ако искате да я използвате, когато на LCD дисплея е избрано Pedal Assist S0.",
      startVoltage:
        "Това е изходното напрежение на дръжката на газта, при което двигателят ще стартира. Минималното напрежение, при което контролерът реагира, е 1,1 V.",
      endVoltage:
        "Това е изходното напрежение на дръжката на газта, при което двигателят ще достигне максималната си мощност (ограничена от други настройки). Максималното допустимо напрежение от контролера е 4,2 V. Трябва да си поиграете малко с този параметър, тъй като максималното напрежение на ръкохватката на газта може да е различно в зависимост от модела. Ако зададете този параметър твърде ниско, няма да получите почти никаква реакция от ръкохватката на газта. Когато го зададете на максимума, който може да произведе ръкохватката, ще получите възможно най-широк диапазон на контрол върху мощността на двигателя.",
      mode:
        "Това е режимът на работа на дръжката на газта. Имате две възможности: скорост и ток. Когато е зададена скорост, контролерът използва скоростта на движение, за да зададе мощността на двигателя в зависимост от положението на ръкохватката на газта. За съжаление има значително забавяне поради начина на измерване на скоростта и реакцията е доста лоша в този режим. Когато е зададен на ток, ръкохватката управлява тока на двигателя в зависимост от позицията си. Този режим работи по-добре и е подобен на работата на автомобил.",
      designatedAssistLevel:
        'Можете да зададете "По команда на дисплея" или да изберете фиксирано ниво. Първата опция използва настройката PAS от вашия LCD дисплей. Това означава, че максималната изходна мощност и скоростта зависят от избраното ниво на PAS и позицията на ръкохватката на газта. Така че, ако е избрано ниско ниво на PAS, максималният ток и скоростта също ще бъдат ниски, дори ако натиснете газта до максимум. Ако за този параметър е избрано фиксирано ниво на подпомагане, дръжката на газта ще използва максималния си ток и скорост. Бъдете внимателни, ако зададете това ниво 9, да не натискате газта до максимум, когато сте спрели, защото високият ток и мощност могат да ви повредят контролера и двигателя.',
      speedLimit:
        "С този параметър можете да ограничите максималната скорост, когато използвате дръжката на газта. Това презаписва максималната скорост на определеното ниво на асистенция, ако тя е по-висока.",
      startCurrent:
        "Това е процентът от максималния ток, подаван към двигателя, когато дръжката на газта генерира минималното допустимо напрежение. Обикновено стойност от 10 % или 20 % работи добре. Ако максималният ви ток в раздела General (Общи) е зададен на 25 А, а Start Current (Стартов ток) е зададен на 10%, ще получите 2,5 А стартов ток. Това ще доведе до плавно стартиране и няма да натовари прекалено много вътрешните предавки. Ако зададете този параметър на много висока стойност, може да повредите вътрешните зъбни колела и двигателя.",
      endText:
        "Когато приключите с настройките на ръкохватката на газта, можете да използвате бутона WRITE в този раздел на програмата, за да ги запишете в контролера. Можете също така да използвате бутона READ (ЧЕТЕНЕ) по всяко време, за да ги прочетете (това ще замени всички стойности в дръжката на дросела. Това няма да презапише никакви други настройки.",
    },
  },
};
