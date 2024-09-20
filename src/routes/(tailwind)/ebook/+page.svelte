<script lang="ts">
	import '@sun-typeface/suit/fonts/variable/woff2/SUIT-Variable.css';

	let article = $state<HTMLElement>();
	const children = $derived(article?.children);

	let childIndex = 0;
	let scrollLeft = 0;
	let isLooping = $state(false);

	const scroll = async (direction: 'prev' | 'next') => {
		if (!article || !children) return;
		isLooping = true;
		while (isLooping) {
			const newIndex = childIndex + (direction === 'prev' ? -1 : +1);
			const child = children[newIndex];
			if (!child) break;

			childIndex = newIndex;
			child.scrollIntoView();
			const scrolled = article.scrollLeft !== scrollLeft;

			scrollLeft = article.scrollLeft;
			if (scrolled) break;
		}
		isLooping = false;
	};

	// TODO Call on font size change.
	const scrollIntoView = () => {
		if (!article || !children) return;
		isLooping = false;
		children[childIndex]?.scrollIntoView();
		scrollLeft = article.scrollLeft;
	};
</script>

<svelte:window onresize={scrollIntoView} />

<div class="fixed inset-0 mx-auto max-w-screen-md bg-white py-4 sm:py-8 md:break-keep md:py-16">
	<!-- TODO Variable font-size. Set it in a non-HTTP cookie for SSR. -->
	<article bind:this={article} class="sm:text-lg">
		<header>
			<!-- https://www.joongang.co.kr/article/22055163 -->
			<h1>‘개통령’ 강형욱 “최시원 개 안락사? 포기하긴 싫다, 다만···”</h1>
			<p>반려견 훈련사 강형욱 보듬컴퍼니 대표</p>
		</header>
		{@render figure({
			src: 'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201710/27/798571c0-c89a-4622-b04d-ad7a98bd43de.jpg',
			alt: '어두운 셔츠와 회색 카디건을 입은 남성이 양손을 들어 올리며 설명하는 모습. 배경에는 나무 블라인드가 보입니다.',
			caption:
				'개를 생명체가 아닌 소유물로 여기는 관행, 개를 버릇없이 굴도록 두는게 사랑이라는 잘못된 생각 개통령 강형욱은 반려견에 대한 잘못된 생각이 반려문화 정착에 걸림돌이 된다고 말한다. 임현동 기자',
			width: 559,
			height: 340
		})}
		<section>
			<p>
				그는 반려견의 대통령, 일명 ‘개통령’으로 불린다. 반려견 훈련사 강형욱(32) 보듬컴퍼니 대표다.
				문제행동을 하는 개들도 그와 눈만 맞추면 문제적 심리가 드러나고 행동이 교정되는 ‘기적’이
				일어난다는 의미에서 붙여진 애칭이다.
			</p>
			<p>
				반려인구 1000만 명 시대. 요즘 반려견의 문제행동은 중2 자녀 문제만큼이나 반려인들에게
				고민거리를 던지는 인생 문제로 떠오르고 있다. 특히 이웃집 개에게 물려 사망한 한일관 대표의
				사건 이후 우리나라 반려견 문화는 사회적 논란거리로까지 번졌다. ‘반려견과 평화롭게 함께 사는
				법’은 반려인과 비반려인 모두의 문제가 된 것이다. 그 방법을 가장 잘 들려줄 사람으로 개통령이
				떠올랐다. 그래서 그의 남양주 훈련원을 찾아갔다.
			</p>
			<p>
				개통령의 사무실에서 가장 먼저 눈에 띈 것은 칠판에 가득 쓰인 메모였다. ‘소심·활동·공격·짖음…’
				등 다양한 행동 특성들을 표로 만들어 언뜻 봐선 알 수 없는 알록달록한 표시를 해 놓은 것이다.
				“무엇이냐”고 물었더니 “사람의 성격 유형을 검사하는 MBTI 검사처럼 개의 심리와 성격 유형을
				검사하는 개 MBTI를 만들고 싶어 정리해 봤는데 지금은 수렁에 빠진 것 같다”고 대답했다. 사람의
				심리 검사는 그 사람만 검사하면 되는데 개의 성격은 그를 둘러싼 사람들의 요소가 너무 다양하게
				작용해 표준화하기가 어렵다는 걸 알게 됐다는 것이다. 개의 문제란 결국 사람의 문제로
				귀결된다는 것이다.
			</p>
		</section>
		<section>
			<h2>
				Q. 평소 지론이 ‘나쁜 개는 없다’는 걸로 알고 있다. 한데 이번에 개에게 물린 뒤 사망하는 사고도
				일어났고, 올해만도 8월까지 개에게 물린 사고가 1000건이 넘는다. 사람을 해치는 개를 우리는
				계속 인내해야 하는가.
			</h2>
			<p>
				“맹견 종자가 도심에 사는 건 문제다. 개의 종자는 사람들의 필요에 의해 만들어진다. 개의 공격적
				본능의 정도도 사람들이 조작한 것이다. 과거 투견으로 내세우거나 사냥 또는 야생동물의 공격을
				막는 개들은 공격성을 더 키우는 방식으로 번식시켰다. 그러나 현대사회에선 이런 공격형 개의
				번식을 줄이고 도태시켜야 한다. 현대도시의 집단주거 생활에 적응할 수 있는 개를 선택하고
				번식시키는 새로운 전략이 필요하게 된 것이다. 이런 일을 하는 사람들을 브리더(Breeder,
				번식자·사육자)라고 하는데 우리 사회에도 브리더 문화가 정착돼야 한다.”
			</p>
		</section>
		<section>
			<h2>Q. 브리더 문화라는 게 무엇인가.</h2>
			<p>
				“우리나라 개들은 돈만 있으면 애견숍에서 살 수 있다. 개공장에서 찍어 내는 개가 대부분이고,
				개의 엄마·아빠가 누군지도 모른다. 그러나 반려견 선진국인 유럽에선 돈만 있다고 개를 살 수는
				없다. 브리더들이 부모 개를 선별해 짝을 맺고 강아지들을 번식시킨다. 강아지를 분양하기에 앞서
				신청서를 받고 깐깐한 인터뷰를 거쳐 그가 개의 부모가 될 자격이 있는지 따져서 분양한다. 이로써
				개의 종자도 개량하지만 개를 키울 자격이 없는 사람들이 견주가 되는 것을 막는 최소한의 장치를
				마련할 수 있다.”
			</p>
		</section>
		<section>
			<h2>
				Q. 브리더가 공격성을 줄이도록 개량한 개를 분양한다고 개의 짖고 무는 본능까지 없앨 순 없지
				않나. 최근 ‘개통령도 개에게 입마개를 해야 한다고 했다’는 인터넷 기사가 많이 떴던데….
			</h2>
			<p>
				“갑자기 무는 개는 정상적인 개가 아니다. 잘못 키워서 잘못된 행동을 하는 것이다. 사람을
				공격하는 개를 키운 사람은 다시는 개를 기르지 못하도록 하는 등의 사회적 제재도 따라야 한다.
				입마개 얘기가 나와서 말인데 언론 보도를 그렇게 하면 안 된다. 나는 개와 관련된 글을 지금까지
				700편 넘게 올렸다. 이 기사들은 예전에 쓴 글을 끌어온 건데 그때 내가 쓴 내용은 항상 개에게
				입마개를 하라는 게 아니었다. 개미용사·훈련사·수의사 등 전문가들이 물리는 사고가 많기 때문에
				개와 관련된 처치를 할 때는 입마개를 씌워 전문가들을 보호해야 한다는 뜻이었다.”
			</p>
		</section>
		<section>
			<h2>Q. 전문가들도 개에게 물려 가면서 일을 한다는 말인가.</h2>
			<p>
				“개의 자유를 최대한 보장해 주는 게 개를 사랑하는 방법이라고 잘못 알고 있는 사람이 너무
				많아서 문제다. 개와 관련된 처치를 할 때 입마개를 씌우겠다고 하면 ‘아이를 억압한다’며
				거부하는 견주가 많다. 우리 같은 일을 하는 사람들은 물려도 된다는 태도인데 세상에 개한테
				물려도 되는 사람은 없다. 사람이 우선이어야 한다. 또 전문가들은 물리지 않기 위해 개를 심하게
				압박하기 때문에 입마개를 씌우지 않으면 오히려 개의 스트레스도 높아진다. 이런 정도의 상식을
				견주가 가져야 하는데 ‘내 개 우선주의’에 빠져 있다 보면 민폐를 끼치게 되는 것이다.”
			</p>
		</section>
		<section>
			<h2>
				Q. 반려인 1000만 명 시대를 맞아 민폐형 반려인과 반려견 때문에 비반려인들의 스트레스가 높다.
				개들이 달려들어도 “우리 개는 안 물어요”라거나 사과하지 않는 등 비상식적 반려인이 많다.
			</h2>
			<p>
				“그게 가장 큰 문제다. 실제로 일부 반려견 커뮤니티에선 함께 모여 개의 목줄을 풀어놓고
				뛰어다니도록 해 일반 시민들을 놀라게 하는 경우도 있다. 혼자서는 할 수 없는 옳지 않은 행동을
				함께 모여 하면서 오히려 동질감을 느끼고 나쁜 행동이 증폭되는 것이다. 이렇게 자정 능력이 없고
				반성 능력도 떨어지면 욕먹는 것뿐 아니라 스스로도 자기 행동의 잘잘못에 대한 판단 능력이
				흐려진다. 이러면 반려인들이 ‘함께 사는 사회에서 혼자 사는 사람’으로밖에 비치지 않는다. 그들
				중 누군가는 ‘이건 잘못된 행동’이라며 말려야 한다. 어떻게 하면 주변과 조화를 이룰 수 있는지
				고민하면서 예절과 매너를 익혀야 한다.”
			</p>
		</section>
		<section>
			<h2>
				Q. ‘함께 사는 사회에 혼자 사는 사람들’. 이 말처럼 요즘 우리 사회도 점차 1인가구가 늘면서
				개만 데리고 사는 독신이 많다. 이것도 문제라는 말인가.
			</h2>
			<p>
				“반려견 선진국에선 바깥일을 오래 하는 독신자에게는 분양하지 않는다. 아이를 방치하는 게
				학대이듯 개도 오랜 시간 혼자 방치하는 건 학대다. 캄캄한 집에 들어올 때 나를 반겨 줄 상대를
				찾아 개를 기르는 건 나쁜 짓이라는 걸 알아야 한다. 개를 소유물이 아닌 생명체로 존중하며
				가족으로 여겨야만 인간과 동물이 평화롭게 공존하는 문화가 만들어지는 거다.”
			</p>
		</section>
		<section>
			<h2>
				Q. 실제로 유기견이 많아지는 것도 개를 귀찮아지면 버릴 수 있는 소유물로 여기기 때문인 것
				같다.
			</h2>
			<p>
				“요즘 우리나라 유기견 문제는 걱정스러운 점이 많다. 버리는 것도 문제이지만 유기견을 입양해
				키우는 게 하나의 ‘선한 행동’의 본보기처럼 홍보되는 것도 큰 문제다. 물론 당장 유기견을 입양해
				키워 주는 게 필요한 일인 것은 맞다. 그러나 유명인들이 가세한 ‘유기견 입양 미담’에 초점을
				맞추다 보면 유기견의 진정한 문제를 잊고 본말이 전도될 수 있다. 지금 우리가 역점을 둬야 할
				것은 유기견이 생기지 않도록 발생의 고리를 끊어야 하는 것이다. 모든 개에게 칩을 심어 개의
				소속을 분명히 알 수 있도록 해야 한다. 인간에게 반려견에 대한 책임을 부여하는 것이 개와
				인간이 함께 사는 세상을 만드는 길이다.”
			</p>
		</section>
		<section>
			<h2>
				Q. 인간의 책임에 대한 얘기가 나왔으니 말인데 이번에 사람을 물었던 최시원씨의 개를 안락사해야
				한다는 의견이 많다. 어떻게 생각하나.
			</h2>
			<p>
				“고민되는 문제다. 과거 미국 등 선진국도 사람에게 상해를 가한 개는 죽였던 경우가 흔하다.
				그러나 요즘은 어느 나라나 안락사에 대해 고민을 한다. 나는 선생님이기 때문에 포기하고 싶지
				않다. 다만 개를 기를 능력과 자격을 갖춘 사람이 키우도록 해야 한다. 반려견이 공격적이면
				강아지를 그렇게 키우는 사람에게 문제가 있을 가능성이 크다. 개도 사람처럼 예의를 가르치고,
				부모의 마음으로 잘못될까 전전긍긍하며 훈육하면 대단히 의연하고 점잖고 훌륭하게 자란다.”
			</p>
		</section>
		<section>
			<h2>Q. 개를 훌륭하게 키우려면 어떻게 해야 하나.</h2>
			<p>
				“사랑에 대한 이기심과 무지함을 버려야 한다. 자신이 사랑받고자 하는 욕망을 투영해 버릇없는
				행동도 다 참아 주며 내가 너를 사랑하는 만큼 너도 나를 무조건 사랑해야 한다는 식의 마음가짐은
				안 된다. 개에게서 행복을 찾지 말고 스스로 꿈을 꾸고 행복해져야 하고, 반려견과는 꿈과 행복을
				나누는 사이라고 생각해야 한다.”
			</p>
		</section>
		<section>
			<h2>Q. 자신이 좋은 반려인이 될 수 있는지 어떻게 알 수 있나.</h2>
			<p>
				“내 개가 새끼를 낳았을 때 어떤 사람에게 입양 보내면 좋을지 생각해 보면 된다. 나 같은
				사람한테 내 귀여운 자식을 맡길 수 있을까 생각해 보고, 만일 판단이 안 된다면 입양해선 안
				된다.”
			</p>
		</section>
		<section>
			<h2>
				Q. 앞에서 반려인들의 태도를 많이 지적했다. 그렇다면 비반려인들의 태도에는 문제가 없는가.
			</h2>
			<p>
				“물론 우리나라 반려 문화의 큰 문제는 반려인들의 무신경과 무례함에서 기인하는 경우가 많다.
				그러나 비반려인들 역시 함께 사는 방법에 서툴긴 마찬가지다. 일단 반려동물을 보면 세 가지를
				명심해야 한다. 말 걸지 말고, 만지지 말고, 그냥 지나가게 둬야 한다. 때로 반려견을 툭툭 치고
				위협하거나 먹을 것을 주는 경우가 있다. 특히 여성이 반려견을 데리고 가면 욕을 하거나 물을
				뿌리고, 오토바이는 일부러 삐끗하며 위협하는 행동을 하는 경우도 많다. 이는 개를 흥분시켜
				불필요한 사고를 유발하는 원인이 된다. 또 반려인들이 피해의식을 키우고, 이런 공통된 경험을
				가진 커뮤니티 동료들과 쓸데없는 반감과 혐오감을 키우며 갈등을 증폭시키고 잘못된 행동에 대해
				스스로 면죄부를 주는 악순환을 만든다.”
			</p>
		</section>
		<section>
			<h2>Q. 그렇다면 이상적인 반려 문화가 정착된 사회는 어떤 모습인가.</h2>
			<p>
				“나 같은 행동교정 훈련사를 전업으로 해선 먹고살기 힘들어지는 사회다. 유럽 선진국에선 특수견
				훈련사를 제외한 반려견 훈련사들은 개가 좋아서 겸업을 하는 경우가 대부분이다. 이미 일반
				시민들이 반려견을 어떻게 교육해야 하는지, 어떻게 공존해야 하는지를 알고 있기 때문이다.
				과거에 ‘아이는 마을이 키운다’는 말처럼 지역공동체가 개들을 교육시키고 함께 사는 매너를 잘
				알고 있는 게 선진 반려사회의 모습이다.”
			</p>
		</section>
	</article>
	<nav>
		<!-- TODO Hide buttons if text is selected. -->
		<button type="button" onclick={() => scroll('prev')}>
			<span class="sr-only">이전 페이지로</span>
		</button>
		<button type="button" onclick={() => scroll('next')} class="right-0">
			<span class="sr-only">다음 페이지로</span>
		</button>
	</nav>
</div>

{#snippet figure({
	src,
	alt,
	caption,
	width,
	height
}: {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
})}
	<figure>
		<!-- TODO Specify size or aspect-ratio to block initial layout shift. -->
		<img {src} alt={alt || caption} {width} {height} />
		<figcaption>{caption}</figcaption>
	</figure>
{/snippet}

<style lang="postcss">
	:root {
		font-family: 'SUIT', sans-serif;
		@apply bg-gray-300;
	}
	article {
		@apply mx-8 h-full columns-1 gap-x-0 space-y-10 overflow-x-hidden;
	}
	header,
	section,
	figure {
		@apply break-inside-avoid;
	}
	h1,
	h2 {
		@apply font-bold;
	}
	header {
		@apply space-y-2;
		> h1 {
			@apply text-[1.5em];
		}
	}
	section {
		@apply space-y-5;
		> h2 {
			@apply text-[1.25em];
		}
	}
	figure {
		@apply relative flex max-h-full flex-col justify-center;
		> img {
			@apply w-full flex-1 overflow-y-hidden object-cover;
		}
		> figcaption {
			@apply max-md:mt-2.5 md:absolute md:inset-x-0 md:bottom-0 md:bg-white/70 md:p-2;
		}
	}
	nav > button {
		@apply absolute inset-y-0 w-1/4;
	}
</style>
