import React, { Component } from 'react';

class condition extends Component {
	render (){
		return (
			<div className="condition">
				<p>Условия предоставления займов</p>
				<div className="condition--info">
					<div className="condition--term">
						<p><span>Срок заема и ставка вознаграждения</span>Средняя годовая ставка вознаграждения в банках Республики Казахстан - 22%. Срок займа - от 6 месяцев до 51 месяцев.</p>
					</div>
					<div className="condition--fines">
						<p><span>Финансовая ответственность (штрафы и проценты)</span>В случае неисполнения/ненадлежащего исполнения обязательств по возврату суммы Займа и/или уплате Вознаграждения и/или погашению иных сумм Задолженности, Банк вправе требовать от Заемщика уплаты пени в размере от 0,25% до 1% от суммы просроченной Задолженности за каждый день просрочки исполнения.</p>
					</div>
					<div className="condition--method">
						<p><span>Методы взыскания задолженности</span>В случае просрочки, банк будет применять все законные средства взыскания задолженности, включая официальные коллекторские агентства или судебное взыскание.</p>
					</div>
					<div className="condition--effect">
						<p><span>Возможное влияние на рейтинг кредитоспособности клиента</span>В случае просрочки, банк будет передавать данные о сумме и сроке просрочки в кредитные бюро, что может повлиять на кредитную историю и кредитный рейтинг заемщика.</p>
					</div>

					<div className="condition--proviso">
						<p><span>Условия возобновления кредита</span>Заем возобновляется только по запросу клиента и без комиссий.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default condition;