import Input from '../Input';
import { useState } from 'react';
import { books } from './searchData';
import { SearchContainer, Subtitle, Title, Result } from './styles';

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value;
                    const searchResult = books.filter(book => book.name.includes(typedText));
                    
                    setSearchedBooks(searchResult);
                }}
            />

            {searchedBooks.map(book => (
                <Result>
                    <img src={book.src} alt={'Livro: ' + book.name} />
                    <p>{book.name}</p>
                </Result>
            ))}
        </SearchContainer>
    );
}

export default Search;