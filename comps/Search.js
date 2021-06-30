import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
// import 'instantsearch.css/themes/reset.css';

const searchClient = algoliasearch('QDHDBDXY6L', '02a878859cf6834371adff3b0423a271');

const Search = () => (
  <div>
    <InstantSearch searchClient={searchClient} indexName="summa_runs">
      <SearchBox />
      <Hits />
    </InstantSearch>
    </div>
);

export default Search;