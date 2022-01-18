{
    const select = {
      templateOf: {
        book: '#template-book',
      },
      containerOf: {
        menu: '#books-list',
      },
    };

    function render() {
      for(let book of dataSource.books) {
        generatedHTML = book.template(select.templateOf.book);
      }
    
      DOM.element = utils.createDOMFromHTML(generatedHTML);

      const menuContainer = document.querySelector(select.containerOf.menu);

      menuContainer.appendChild(DOM.element);
      
    }

    function initActions() {
        const favoriteBooks = [];
    }

    render();
    initActions();
}