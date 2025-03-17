describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
         
         cy.get('#mail').type('german@dolnikov.ru');  //Введен верный логин
         cy.get('#pass').type('iLoveqastudio1');  //Введен верный пароль
         cy.get('#loginButton').click();  //Нажать кнопку войти
        
         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно');  //Проверяю,что вижу текс
         cy.get('#messageHeader').should('be.visible');  //Текст виден User
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он видин для User

    })    
    
    it('Востановления пароль', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
        cy.get('#forgotEmailButton').click();  //Нажать забыл пароль

        cy.get('#forgotForm')  //открылось окно 
        cy.get('#forgotForm > .header').contains('Восстановите пароль') ////Проверяю,что вижу текс 
        cy.get('#mailForgot').type('german@dolnikov.ru');  //Ввели верный логин
        cy.get('#restoreEmailButton').click(); // кликнуть
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
   }) 
 
    
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
        
        cy.get('#mail').type('german@dolnikov.ru');  //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7');  //Ввели неверный пароль
        cy.get('#loginButton').click();  //Нажать кнопку войти
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //Проверяю,что вижу текс
        cy.get('#messageHeader').should('be.visible');  //Текст виден User
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он видин для User

   })     

   it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/');  //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
    
    cy.get('#mail').type('ge@dolnikov.ru');  //Ввели верный логин
    cy.get('#pass').type('iLoveqastudio7');  //Ввели неверный пароль
    cy.get('#loginButton').click();  //Нажать кнопку войти
   
    cy.get('#messageHeader').contains('Такого логина или пароля нет');  //Проверяю,что вижу текс
    cy.get('#messageHeader').should('be.visible');  //Текст виден User
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он видин для User

})     

it('Верный пароль и  логин без @', function () {
         cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
         
         cy.get('#mail').type('germandolnikov.ru');  //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');  //Ввели верны пароль
         cy.get('#loginButton').click();  //Нажать кнопку войти
        
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //Проверяю,что вижу текс
         cy.get('#messageHeader').should('be.visible');  //Текст виден User
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он видин для User
  })

  it('Верный пароль и  приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');  //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  //Проверяю цвет кнопки восст.пароль
    
    cy.get('#mail').type('GerMan@Dolnikov.ru');  //Ввели верный логин
    cy.get('#pass').type('iLoveqastudio1');  //Ввели верны пароль
    cy.get('#loginButton').click();  //Нажать кнопку войти
   
    cy.get('#messageHeader').contains('Авторизация прошла успешно');  //Проверяю,что вижу текс
    cy.get('#messageHeader').should('be.visible');  //Текст виден User
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он видин для User
})

})