var templates = {

	meets : '<table class="ui table" id="meets">'
					+'	<thead>'
					+'		<tr>'
					+'			<th class="ten wide">Meet</th>'
					+'			<th class="five wide">Date</th>'
					+'		</tr>'
					+'	</thead>'
					+'	<tbody>'
					+'		{{#each this}}'
					+'			<tr>'
					+'				<td><a href="#">{{name}}</a></td>'
					+'				<td>{{date}}</td>'
					+'			</tr>'
					+'		{{/each}}'
					+'		'
					+'	</tbody>'
					+'</table>',

 schedule: '<table class="ui table" id="schedule">'
					+'	<thead>'
					+'		<tr>'
					+'			<th class="ten wide">Event</th>'
					+'			<th class="five wide">Time</th>'
					+'		</tr>'
					+'	</thead>'
					+'	<tbody>'
					+'		{{#each this}}'
					+'			<tr>'
					+'				<td class="event">'
					+'					{{#if entries}}'
					+'						<a href="#">{{event}}</a>'
					+'					{{else}}'
					+'						{{event}}'
					+'					{{/if}}'
					+'				</td>'
					+'				<td>{{time}}</td>'
					+'			</tr>'
					+'		{{/each}}'
					+'		'
					+'	</tbody>'
					+'</table>',

 entries: '<table class="ui table" id="entries">'
					+'	<thead> '
					+'		<tr id={{id}}> '
					+'			<th class="four wide">Athlete</th> '
					+'			<th class="two wide">Season Best</th> '
					+'			<th class="two wide">Personal Record</th>'
					+'			<th class="two wide">Predicted Points</th>'
					+'			<th class="two wide">Submit Entry</th> '
					+'		</tr> '
					+'	</thead> '
					+'	<tbody>'
					+'		{{#each this}}'
					+'			<tr id={{id}}> '
					+'				<td>{{name}}</td>'
					+'				<td>{{getSB this}}</td>'
					+'				<td>{{getPR this}}</td>'
					+'				<td class="pts">0</td>'
					+'				<td>'
					+'					<div class="ui icon green button">'
			  		+'						<i id={{id}} class="plus icon"></i>'
					+'					</div>'
					+'				</td>'
					+'			</tr>'
					+'		{{/each}}'
					+'	</tbody>'
					+'</table>',


   results: '<table class="ui table" id="results"> '
					+'		<thead> '
					+'			<tr id={{id}}> '
					+'				<th class="four wide">Athlete</th> '
					+'				<th class="four wide">Time</th> '
					+'				<th class="three wide">Points</th>'
					+'				<th class="three wide">School</th>'
					+'			</tr> '
					+'		</thead>'
					+'	<tbody> '
					+'		 {{#each this}}'
					+'		<tr> '
					+'			<td>{{name}}</td> '
					+'			<td>{{getSB this}}</td> '
					+'			<td class="pts">{{getPts this}}</td> '
					+'			<td>{{getSchool this}}</td>'
					+'		</tr>'
					+'		 {{/each}}'
					+'	</tbody> '
					+'</table>',

	oldResults: '<div class="predicted-results-table">'
				+'	<table class="ui table"> '
				+'			<thead> '
				+'				<tr> '
				+'					<th class="four wide">Athlete</th> '
				+'					<th class="four wide">Time</th> '
				+'					<th class="three wide">Points</th>'
				+'					<th class="three wide">School</th>'
				+'				</tr> '
				+'			</thead> '
				+'			<tbody> '
				+'			</tbody> '
				+'	</table> '
				+'</div>',

}

