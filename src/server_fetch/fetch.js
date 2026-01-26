export const fetch_fnx = async (type, opt) => {
    const aborter = new AbortController();
    const signal = aborter.signal;

    const timer = setTimeout(() => {
        console.log("aborting fetch (timeout)");
        aborter.abort();
    }, 10000);

    let url =
        process.env.NODE_ENV === "production"
            ? `${process.env.URL}/api`
            : "http://localhost:4600/api";

    switch (type) {
        case "courses":
            url = `${url}/courses?type=full`;
            break;
        case "syllabus":
            url = `${url}/syllabus?id=${opt}`;
            break;
        case "course-list":
            url = `${url}/courses?type=list`;
            break;
        case "services":
            url = `${url}/services`;
            break;
        case "user":
            url = `${url}/user/${opt}`;
            break;
        case "project-dets":
            url = `${url}/project_dets/${opt}`;
            break;
        case "seo-sitemap":
            url = `${url}/sitemap`;
            break;
        default:
            break;
    }

    try {
        const res = await fetch(url, { cache: "no-store", signal });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Server fetch failed");
        }

        return data;
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Fetch aborted due to timeout");
        } else {
            console.log("from fetch fnx", error.message);
        }
        throw error;
    } finally {
        clearTimeout(timer);
    }
};