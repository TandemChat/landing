import ErrorPage from "../components/error/ErrorPage";
import PageHeading from "../components/layout/global/PageHeading";
import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";

export default function NotFound() {
    return (
        <PagePadding>
            <PageTitle>{`Страница не найдена - Tandem`}</PageTitle>
            <ErrorPage code="404" message="Страница не найдена" />
        </PagePadding>
    );
}
