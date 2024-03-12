import { books } from './LastReleasesData';
import { Title } from '../Title';
import CardRecommends from '../CardRecommends';
import bookImage from '../../images/book2.png' ;
import { LastReleasesContainer, NewBooksContainer } from './styles';

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                color="#EB9B00"
                fontSize="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt={'Livro: ' + book.name} />
                ))}
            </NewBooksContainer>
            <CardRecommends
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                image={bookImage}
            />
        </LastReleasesContainer>
    );
}

export default LastReleases;