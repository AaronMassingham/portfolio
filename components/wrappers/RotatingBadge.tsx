import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RotatingBadge = ({ children }: Props) => {
	const variants = {
		animate: {
			rotate: -360,
			transition: {
				duration: 20,
				repeat: Infinity,
				ease: "linear",
			},
		},
	};
	return (
		<Container>
			<Svg
				viewBox="0 0 115 115"
				variants={variants}
				animate="animate"
				aria-label="Scroll down to view my work"
			>
				<path d="m39.017 15.355-4.695-4.86-.036.016c.065.118.14.263.224.436.085.173.175.361.27.566.095.206.189.416.282.632l1.78 4.146-.709.305-2.816-6.561 1.13-.485 4.42 4.564.031-.014-.233-6.361 1.122-.481 2.816 6.56-.753.324-1.803-4.2c-.083-.194-.164-.391-.242-.589-.078-.199-.15-.388-.216-.566-.066-.179-.123-.334-.169-.467l-.036.016.259 6.754-.626.265zm6.139-5.871.951-3.939.866-.222-1.218 4.824.688 2.682-.804.206-.678-2.644-3.404-3.68.88-.226 2.719 2.999zM59.832 4.22l-1.625 7.208-.834.033-1.605-4.745c-.048-.135-.093-.271-.136-.407-.043-.137-.083-.268-.121-.391-.038-.124-.069-.233-.094-.329-.025-.095-.043-.167-.055-.215-.005.049-.014.121-.028.216s-.033.205-.055.329c-.023.125-.05.258-.082.399-.032.142-.066.284-.103.43l-1.186 4.851-.834.032-2.175-7.058.863-.034 1.324 4.429c.045.147.087.294.127.437.04.144.076.283.109.419s.063.268.091.396c.028.13.054.256.079.379.011-.128.027-.262.047-.4.021-.14.043-.281.069-.426s.054-.29.085-.438c.031-.147.065-.296.102-.443l1.108-4.477.854-.033 1.513 4.406c.052.151.1.301.145.449.045.147.085.292.122.432.037.141.069.274.099.402.029.127.056.248.08.36.017-.16.038-.328.063-.506.025-.177.057-.362.093-.556s.076-.394.12-.601l.97-4.515.87-.033zm7.769 4.614c-.075.545-.213 1.03-.414 1.458-.2.428-.459.783-.775 1.065-.317.283-.689.484-1.116.603s-.907.141-1.438.067c-.549-.076-1.015-.229-1.398-.46s-.688-.525-.912-.885c-.225-.36-.373-.773-.445-1.24-.071-.467-.069-.973.006-1.518.1-.722.307-1.339.621-1.851.313-.513.734-.887 1.262-1.122.527-.236 1.156-.304 1.889-.202.699.097 1.269.328 1.705.694.438.366.742.838.914 1.415.169.579.204 1.236.101 1.976zm-5.63-.78c-.083.6-.069 1.131.041 1.593s.325.837.646 1.124c.319.288.752.47 1.297.545.549.076 1.014.019 1.396-.172s.688-.493.917-.908.385-.923.467-1.522c.127-.912.034-1.652-.276-2.22-.312-.567-.871-.906-1.681-1.019-.548-.076-1.016-.021-1.403.166-.387.186-.697.484-.93.894-.232.41-.391.917-.474 1.519zm10.334-1.608c.562.164 1.006.37 1.333.617.326.246.538.538.636.876.098.337.082.726-.047 1.166-.106.363-.261.646-.463.85-.202.203-.432.349-.688.437-.257.088-.517.137-.781.147l.976 3.63-.928-.272-.839-3.35-1.424-.418-.839 2.858-.796-.234 2.009-6.85 1.851.543zm-.249.675-1.008-.296-.771 2.629 1.087.318c.56.164 1.004.171 1.335.021s.562-.448.691-.892c.137-.465.094-.836-.129-1.111-.222-.276-.624-.499-1.205-.669zm6.796 9.501-.898-.396-.953-4.215-.973.318-1.125 2.551-.76-.335 2.881-6.532.76.336-1.437 3.256c.255-.118.515-.234.777-.348.264-.113.526-.229.789-.349l2.832-1.253.889.392-3.85 1.686 1.068 4.889zm8.063-1.422c.132-.186.271-.285.417-.299.146-.014.283.025.413.118.136.097.222.217.259.361s-.011.309-.144.494c-.13.184-.271.283-.424.301-.152.017-.296-.022-.432-.119-.129-.093-.21-.213-.24-.36s.02-.313.151-.496zm4.963 11.724 3.175-5.965-.025-.03c-.092.098-.207.214-.345.348-.139.134-.29.277-.456.432s-.337.309-.514.463l-3.395 2.972-.508-.581 5.371-4.702.811.926-2.979 5.612.022.025 5.979-2.184.804.918-5.371 4.702-.54-.617 3.438-3.01c.159-.14.321-.277.485-.413.165-.135.322-.262.472-.38.15-.118.281-.22.393-.305l-.025-.029-6.346 2.329-.446-.511zm7.48 4.017 4.039-.317.479.754-4.963.338-2.337 1.485-.445-.7 2.304-1.465 2.442-4.376.487.767-2.006 3.514zm9.555 12.325-7.358.685-.289-.783 4.016-2.994c.113-.087.229-.172.346-.255.116-.083.229-.162.334-.235.106-.074.201-.138.284-.191.082-.053.146-.093.188-.118-.048.011-.119.023-.214.04-.095.016-.205.032-.331.049-.126.018-.261.032-.404.046-.145.014-.291.024-.44.035l-4.979.372-.289-.783 6.039-4.252.299.811-3.802 2.629c-.127.089-.252.174-.376.257-.124.082-.245.159-.364.233-.118.073-.235.143-.35.209s-.226.131-.335.192c.125-.029.257-.056.396-.079s.28-.045.426-.066c.145-.021.293-.038.443-.054s.301-.029.453-.041l4.6-.33.296.801-3.722 2.803c-.128.096-.255.188-.382.276s-.252.172-.374.25-.239.15-.352.219c-.112.067-.218.13-.318.188.158-.034.325-.066.501-.097s.361-.059.558-.084c.195-.024.397-.049.608-.071l4.593-.475.299.813zm-2.008 8.843c-.542.096-1.047.113-1.515.053-.469-.06-.886-.197-1.253-.412-.366-.215-.671-.508-.915-.878-.243-.371-.411-.82-.504-1.35-.096-.545-.093-1.035.01-1.472.102-.436.289-.815.563-1.14.273-.324.621-.592 1.044-.803.422-.211.904-.364 1.446-.459.718-.126 1.369-.118 1.952.023.584.143 1.068.429 1.454.858.387.43.644 1.008.771 1.736.122.695.076 1.308-.139 1.836s-.57.963-1.067 1.303c-.497.342-1.113.576-1.847.705zm-.981-5.598c-.597.104-1.099.28-1.504.526-.406.246-.697.566-.873.959s-.216.859-.121 1.401c.096.545.292.971.591 1.277.298.306.68.504 1.146.595.465.09.996.083 1.593-.021.907-.159 1.583-.474 2.027-.943.445-.47.597-1.107.456-1.912-.096-.545-.292-.973-.588-1.285-.296-.312-.675-.515-1.136-.61-.462-.097-.993-.092-1.591.013zm4.696 9.311c.016.586-.043 1.072-.178 1.459-.134.386-.347.678-.638.874-.29.197-.665.302-1.124.314-.378.011-.694-.049-.95-.179-.256-.129-.465-.303-.628-.52-.162-.217-.289-.449-.38-.698l-3.153 2.047-.026-.967 2.929-1.83-.041-1.483-2.978.082-.022-.829 7.136-.198.053 1.928zm-.72-.028-.028-1.05-2.738.076.031 1.132c.016.583.146 1.008.392 1.276s.599.396 1.062.384c.484-.014.823-.169 1.018-.466.192-.297.281-.747.263-1.352zm-6.934 9.42.099-.977 3.712-2.212-.604-.826-2.773-.279.083-.826 7.103.716-.083.826-3.542-.357c.192.206.383.417.572.632.189.216.381.43.575.643l2.069 2.304-.097.967-2.796-3.138-4.318 2.527zm3.858 7.199c.218.068.355.17.414.305.058.134.063.277.016.43-.05.158-.138.277-.264.357s-.297.086-.515.018c-.214-.067-.354-.171-.417-.311s-.07-.288-.021-.446c.048-.152.138-.267.269-.341.131-.076.304-.08.518-.012zm-9.621 8.348 6.652 1.187.021-.033c-.121-.058-.267-.131-.437-.222-.17-.09-.354-.19-.551-.301-.198-.11-.397-.227-.599-.347l-3.871-2.316.396-.662 6.125 3.665-.632 1.057-6.256-1.109-.018.029 3.917 5.019-.627 1.047-6.123-3.666.421-.704 3.922 2.347c.182.109.362.221.542.336s.349.226.507.332c.158.105.295.199.41.279l.02-.033-4.167-5.322.348-.583zm-1.528 8.357 1.543 3.746-.57.688-1.847-4.62-2.132-1.767.53-.64 2.101 1.742 4.916.98-.58.698-3.961-.827zm-8.776 12.884-2.925-6.786.655-.517 4.089 2.894c.118.081.234.164.35.249.115.086.225.168.327.246.104.078.193.148.27.21.076.062.133.11.171.143-.025-.043-.06-.106-.104-.191-.045-.086-.094-.186-.149-.3-.055-.114-.11-.237-.168-.37-.058-.134-.114-.27-.17-.408l-1.893-4.62.655-.518 5.91 4.429-.679.536-3.675-2.804c-.123-.093-.243-.187-.36-.278-.116-.093-.228-.185-.334-.274s-.209-.179-.308-.268c-.099-.088-.194-.174-.286-.259.066.109.132.227.197.352.065.124.13.253.194.384.064.132.127.267.188.405.062.138.121.277.179.419l1.736 4.271-.671.529-3.815-2.674c-.131-.092-.258-.185-.381-.277-.123-.094-.241-.187-.354-.278-.111-.092-.217-.181-.316-.267-.099-.086-.19-.167-.276-.244.081.139.163.288.246.446.083.157.167.326.252.504.084.178.17.363.256.557l1.871 4.222-.682.537zm-9.018.833c-.259-.485-.433-.961-.521-1.424-.088-.464-.087-.903.003-1.318.091-.416.274-.796.551-1.143s.652-.646 1.126-.898c.488-.26.956-.409 1.402-.447.445-.039.865.021 1.258.182.394.159.756.407 1.088.743s.627.746.886 1.232c.343.644.537 1.265.583 1.863s-.076 1.148-.364 1.648c-.289.5-.759.924-1.411 1.271-.624.332-1.22.479-1.789.438-.568-.04-1.092-.244-1.569-.611s-.893-.878-1.243-1.536zm5.016-2.672c-.284-.534-.607-.956-.968-1.266s-.754-.487-1.182-.532-.885.062-1.37.32c-.489.26-.832.579-1.031.958-.198.379-.268.803-.209 1.273.059.47.229.973.515 1.507.433.813.941 1.358 1.526 1.636.584.276 1.237.223 1.958-.161.488-.26.835-.579 1.039-.957.205-.378.281-.802.229-1.27-.052-.468-.221-.97-.507-1.508zm-7.413 7.36c-.552.196-1.032.291-1.441.282-.409-.008-.752-.12-1.029-.336s-.492-.54-.646-.973c-.127-.355-.168-.675-.123-.959.044-.283.145-.536.301-.757.156-.222.338-.414.546-.578l-2.92-2.366.91-.324 2.646 2.221 1.398-.497-.998-2.807.782-.278 2.393 6.726-1.819.646zm-.194-.692.988-.352-.918-2.581-1.066.38c-.55.195-.914.45-1.093.767-.18.316-.192.692-.037 1.128.162.457.415.731.757.824.341.092.797.037 1.369-.166zm-11.092-3.705.96-.205 3.244 2.854.602-.828-.585-2.726.812-.174 1.497 6.979-.812.174-.747-3.48c-.137.246-.278.492-.426.738-.146.246-.292.495-.435.745l-1.559 2.676-.95.204 2.13-3.623-3.731-3.334zm-5.638 5.877c.004.228-.049.391-.157.488-.109.098-.243.148-.403.15-.166.003-.306-.043-.422-.137-.115-.094-.175-.255-.179-.483-.003-.225.051-.389.163-.493s.251-.158.417-.16c.159-.003.296.046.408.146.113.102.17.264.173.489zm-10.94-6.558.936 6.692.038.009c.017-.133.042-.294.075-.483s.072-.396.116-.617c.043-.223.092-.447.144-.676l1.001-4.399.752.171-1.584 6.961-1.2-.273-.887-6.291-.033-.008-3.555 5.28-1.19-.271 1.584-6.961.8.183-1.014 4.456c-.047.206-.097.413-.151.619s-.106.401-.158.585-.098.343-.139.477l.038.009 3.766-5.612.661.149zm-8.438 1.126-3.088 2.623-.83-.331 3.825-3.181 1.023-2.572.771.307-1.009 2.536.584 4.978-.844-.336-.432-4.024zm-14.948-4.383 5.56-4.868.694.465-1.499 4.78c-.041.137-.084.273-.13.409-.046.136-.09.265-.133.387-.042.122-.082.229-.118.321-.036.091-.063.16-.083.206.033-.037.083-.09.15-.158s.147-.146.239-.233c.092-.088.192-.179.301-.274.109-.096.221-.191.336-.286l3.816-3.221.694.465-2.4 6.984-.718-.481 1.539-4.358c.051-.146.103-.288.155-.428s.105-.273.158-.402.106-.254.16-.375c.053-.121.106-.238.159-.352-.084.097-.176.194-.274.295s-.201.202-.306.304-.214.203-.327.304c-.112.101-.227.2-.344.299l-3.532 2.964-.71-.476 1.373-4.452c.047-.152.096-.302.147-.448.051-.146.103-.286.156-.421.053-.136.105-.263.157-.384.051-.12.101-.233.148-.339-.108.12-.224.244-.349.372s-.259.26-.402.395-.294.273-.451.415l-3.443 3.076-.723-.485zm-3.545-8.305c.382-.396.78-.707 1.194-.934s.832-.361 1.255-.403c.423-.042.842.016 1.257.172.415.156.815.421 1.201.795.398.384.684.782.858 1.195.174.412.246.83.215 1.253-.03.423-.154.845-.372 1.264s-.517.826-.899 1.223c-.507.523-1.038.9-1.593 1.129-.556.228-1.116.281-1.681.161s-1.113-.438-1.645-.95c-.508-.491-.831-1.014-.968-1.567s-.105-1.114.097-1.682.563-1.119 1.081-1.656zm4.087 3.95c.421-.435.723-.872.907-1.311.184-.438.231-.867.142-1.288-.089-.421-.331-.822-.727-1.205-.398-.385-.808-.612-1.229-.685s-.847-.009-1.276.192c-.429.201-.854.519-1.275.954-.64.663-1.002 1.314-1.085 1.956-.083.642.169 1.246.756 1.813.398.385.809.616 1.231.694.423.077.849.02 1.278-.174.429-.192.855-.508 1.278-.946zm-9.291-4.784c-.357-.464-.596-.893-.714-1.283-.119-.392-.118-.753.001-1.083.12-.33.361-.636.725-.916.299-.23.591-.368.874-.414.283-.045.554-.028.813.052s.499.193.718.341l1.347-3.509.59.766-1.293 3.202.906 1.177 2.359-1.818.507.658-5.656 4.356-1.177-1.529zm.598-.4.641.832 2.17-1.672-.691-.897c-.355-.462-.711-.729-1.067-.802s-.717.031-1.083.313c-.384.296-.567.621-.55.976.017.354.211.771.58 1.25zm.072-11.716.493.849-1.709 3.969.974.315 2.411-1.401.417.718-6.172 3.587-.417-.718 3.078-1.788c-.276-.055-.554-.113-.833-.177s-.561-.124-.843-.182l-3.028-.652-.488-.841 4.104.902 2.013-4.581zm-7.34-3.549c-.216.072-.387.071-.513-.003s-.214-.188-.265-.339c-.053-.157-.051-.306.003-.444.055-.138.191-.243.407-.315.213-.071.386-.069.52.007.133.075.227.191.279.349.051.151.045.296-.017.434-.064.137-.201.241-.414.311zm2.891-12.418-6.084 2.942.003.039c.132-.024.293-.051.483-.077s.398-.053.623-.079.454-.05.688-.07l4.494-.396.068.769-7.111.625-.108-1.226 5.716-2.773-.003-.033-6.115-1.765-.107-1.217 7.111-.625.072.816-4.553.401c-.211.019-.423.033-.636.046-.213.012-.415.021-.605.028-.191.007-.356.012-.497.015l.003.039 6.497 1.864.061.677zm-3.672-7.648-3.452-2.122.057-.892 4.211 2.649 2.763.176-.052.828-2.724-.173-4.551 2.1.058-.907 3.69-1.659zm-.47-15.586 6.352 3.776-.227.804-5.009.058c-.143.004-.287.005-.43.003-.144-.001-.28-.004-.409-.006-.129-.003-.243-.008-.341-.013-.098-.006-.172-.011-.222-.015.045.02.111.051.197.094s.185.094.296.154c.112.061.23.128.354.201.125.074.25.151.376.23l4.245 2.63-.227.804-7.385-.116.235-.832 4.621.112c.155.003.307.008.455.014.149.007.292.016.432.026.139.01.274.022.406.035.132.014.26.028.384.043-.118-.051-.239-.106-.366-.17-.126-.062-.253-.128-.383-.196-.129-.069-.259-.142-.39-.217-.131-.076-.261-.154-.391-.234l-3.913-2.439.232-.822 4.658-.075c.16-.002.317-.002.472.001s.304.01.449.018c.145.009.282.02.413.03.13.012.253.023.368.036-.147-.065-.301-.138-.461-.217-.16-.079-.327-.166-.5-.261-.173-.094-.351-.194-.534-.3l-3.993-2.32.236-.836zm6.824-5.963c.494.242.913.525 1.256.85.343.323.6.681.77 1.07.17.389.244.806.223 1.248s-.15.905-.386 1.388c-.244.497-.535.892-.874 1.184-.339.293-.714.489-1.126.591-.412.101-.851.112-1.316.034-.466-.077-.946-.237-1.44-.479-.655-.32-1.176-.71-1.564-1.169-.388-.458-.612-.975-.671-1.549-.059-.575.074-1.193.399-1.857.311-.635.708-1.102 1.193-1.403.484-.301 1.028-.442 1.63-.425s1.236.189 1.906.517zm-2.5 5.105c.543.266 1.052.419 1.526.459.473.04.896-.047 1.27-.262.374-.214.681-.568.923-1.062.244-.496.334-.956.274-1.38-.061-.423-.253-.808-.576-1.154s-.757-.653-1.3-.92c-.827-.405-1.559-.549-2.195-.431-.636.117-1.134.544-1.493 1.277-.244.497-.337.958-.281 1.385.056.426.242.813.559 1.162.314.35.746.658 1.293.926zm1.692-10.308c.332-.483.666-.841 1.002-1.074.336-.233.68-.344 1.031-.331s.716.148 1.094.408c.311.214.532.449.662.704.13.256.197.52.201.79.003.271-.031.534-.104.788l3.753.205-.548.796-3.445-.247-.841 1.223 2.455 1.688-.471.684-5.882-4.045 1.093-1.589zm.564.446-.595.865 2.257 1.552.642-.933c.331-.48.476-.901.436-1.263s-.25-.673-.631-.935c-.399-.274-.765-.35-1.096-.224-.333.128-.67.439-1.013.938zm11.162-3.519-.656.73-4.303-.405v1.023l2.074 1.863-.555.617-5.311-4.77.555-.618 2.648 2.379c-.033-.279-.063-.562-.088-.848-.026-.286-.055-.571-.086-.858l-.311-3.081.649-.723.404 4.183 4.98.508zm1.119-8.086c-.135-.184-.187-.347-.155-.489.032-.144.112-.262.24-.357.133-.099.274-.143.423-.134.148.01.291.106.426.289.133.181.185.347.154.496-.031.15-.113.275-.246.374-.128.095-.268.134-.417.117s-.291-.115-.425-.296z" />
			</Svg>
			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: var(--primaryBackground);
	border-radius: 100%;
	overflow: visible;
	z-index: 5;
	display: grid;
	place-items: center;
	padding: 5px;
	height: 10rem;
	aspect-ratio: 1/1;
	overflow: hidden;
	box-shadow: var(--shadow);
	border: 2px solid var(--pink);
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

const Svg = styled(motion.svg)`
	width: auto;
	height: 100%;
	pointer-events: none;
	path {
		fill: var(--pink);
	}
`;

interface Props {
	children?: ReactNode;
}

export default RotatingBadge;
