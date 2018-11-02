
// Highlight words in text.

( spec => {
	
	const prepositions = valuesToRegex( monostack_prepositions );
	const conjunctions = valuesToRegex( monostack_conjunctions );
	const pronouns = valuesToRegex( monostack_pronouns );
	
	function preg_quote (str, delimiter) {
		// @see http://locutus.io/php/preg_quote/
		return ( str + '' ).replace( new RegExp( '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + ( delimiter || '' ) + '-]', 'g'), '\\$&' );
	}
	
	function valuesToRegex( arr ) {
		return new RegExp( `^(${ arr.map( preg_quote ).join( '|' ) })$`, 'i' );
	}
	
	function highlight( node ) {
		node.innerHTML = node.innerHTML.split( ' ' ).map( word => {
			if ( prepositions.test( word ) ) {
				return `<span class="highlight-prepositions">${ word }</span>`;
			} else if ( conjunctions.test( word ) ) {
				return `<span class="highlight-conjunctions">${ word }</span>`;
			} else if ( pronouns.test( word ) ) {
				return `<span class="highlight-pronouns">${ word }</span>`;
			}
			return word;
		} ).join( ' ' );
	}

	document.querySelectorAll( '.hentry .entry-content' ).forEach( content => {
		content.querySelectorAll( '*' ).forEach( highlight );
		highlight( content );
	} );

} ).call( this );
